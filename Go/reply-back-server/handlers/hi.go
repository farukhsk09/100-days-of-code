package handlers

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

//defining a struct that has logger attribute
type Hi struct {
	l *log.Logger
}

//simialr to a constructor that takes l as param and returns the Hi Object.
func NewHi(l *log.Logger) *Hi {
	return &Hi{l}
}
func (h *Hi) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	//read data from the request body , := is declare and assing in one , _ is ignoring the return type
	d, err := ioutil.ReadAll(r.Body)
	if err != nil {
		//handles errors and writes message to the response writer
		http.Error(rw, "Oops", http.StatusBadRequest)
		return
	}

	//printing format strings
	h.l.Printf("Hi %s\n", d)
	// write back to the response and send it back to the caller

	fmt.Fprintf(rw, "Hi %s\n", d)
}
