package handlers

import (
	"example/reply-back-server/data"
	"log"
	"net/http"
)

type Users struct {
	l *log.Logger
}

func NewUsers(l *log.Logger) *Users {
	return &Users{l}
}

func (us *Users) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		us.getUsers(rw)
		return
	}

	rw.WriteHeader(http.StatusMethodNotAllowed)
}

func (us *Users) getUsers(w http.ResponseWriter) {
	us.l.Printf("Inside Get Users Handler")
	userList := data.GetUsers()
	err := userList.ToJSON(w)
	if err != nil {
		http.Error(w, "Failed During Encoding Data to JSON", http.StatusInternalServerError)
	}
}
