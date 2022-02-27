package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {

	//on Base Path - Logs Hello World
	http.HandleFunc("/", func(rw http.ResponseWriter, r *http.Request) {
		log.Println("Hello World")
		//read data from the request body , := is declare and assing in one , _ is ignoring the return type
		d, err := ioutil.ReadAll(r.Body)
		if err != nil {
			//handles errors and writes message to the response writer
			http.Error(rw, "Oops", http.StatusBadRequest)
			return
		}

		//printing format strings
		log.Printf("Hi %s\n", d)
		// write back to the response and send it back to the caller

		fmt.Fprintf(rw, "Hi %s\n", d)
	})
	//This creates a server and since no custom handler is specified - it will use default serve Mux.
	http.ListenAndServe(":9090", nil)
}
