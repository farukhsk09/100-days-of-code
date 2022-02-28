package main

import (
	"context"
	"example/reply-back-server/handlers"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"
)

func main() {

	//on handler path uses the handlers package reference
	l := log.New(os.Stdout, "sentiment-api ", log.LstdFlags)
	hh := handlers.NewHi(l)
	uh := handlers.NewUsers(l)

	//create a serveMux and add the handler
	sm := http.NewServeMux()
	sm.Handle("/", hh)
	sm.Handle("/get", uh)

	//configure a server
	s := &http.Server{
		Addr:         ":9090",
		Handler:      sm,
		IdleTimeout:  120 * time.Second,
		WriteTimeout: 1 * time.Second,
		ReadTimeout:  1 * time.Second,
	}

	//This creates a server to start
	go func() {
		err := s.ListenAndServe()
		if err != nil {
			log.Fatal(err)
		}
		log.Printf("Started Server on port %s", s.Addr)
	}()

	sigChan := make(chan os.Signal, 10)
	signal.Notify(sigChan, os.Interrupt)
	signal.Notify(sigChan, os.Kill)
	// here we are waiting for a signal
	sig := <-sigChan
	l.Println("Received Terminate graceful Shutdow", sig)
	tc, _ := context.WithTimeout(context.Background(), 30*time.Second)
	s.Shutdown(tc)

}
