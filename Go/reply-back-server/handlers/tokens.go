package handlers

import (
	"io/ioutil"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/go-redis/redis"
	"github.com/google/uuid"
)

type Token struct {
	l      *log.Logger
	client *redis.Client
}

func NewToken(l *log.Logger, client *redis.Client) *Token {
	return &Token{l, client}
}

func (t *Token) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		//its a get method create a token and return it
		uuidVal := uuid.New().String()
		uuidToken := strings.Replace(uuidVal, "-", "", -1)
		rw.Write([]byte(uuidToken))
		statusVal := t.client.Set(uuidToken, "yes", 120*time.Second)
		t.l.Println(statusVal)
		return
	}
	t.l.Println("Validating Token")
	token, err := ioutil.ReadAll(r.Body)
	if err != nil {
		t.l.Println("Failed to fetch token")
		http.Error(rw, "Error Fetching Token", http.StatusUnauthorized)
		return
	}
	//need to get the token validated with redis cache soon
	result, err := t.client.Exists(string(token)).Result()
	if err != nil || result != 1 {
		t.l.Println("Invalid Token received")
		http.Error(rw, "Invalid Token", http.StatusUnauthorized)
		return
	} else {
		t.l.Printf("result is %d", result)
		return
	}

}
