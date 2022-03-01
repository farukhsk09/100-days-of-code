package handlers

import (
	"bytes"
	"io/ioutil"
	"log"
	"net/http"
)

type Token struct {
	l *log.Logger
}

func NewToken(l *log.Logger) *Token {
	return &Token{l}
}

func (t *Token) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	t.l.Println("Validating Token")
	token, err := ioutil.ReadAll(r.Body)
	if err != nil {
		t.l.Println("Failed to fetch token")
		http.Error(rw, "Error Fetching Token", http.StatusUnauthorized)
		return
	}
	//need to get the token validated with redis cache soon
	var validatedToken = []byte("yes")
	// bytes.Equal compares size and content of strings
	if bytes.Equal(token, validatedToken) {
		return
	} else {
		t.l.Println("Invalid Token received")
		http.Error(rw, "Invalid Token", http.StatusUnauthorized)
	}

}
