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

	sm := http.NewServeMux()
	sm.Handle("/", hh)

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
	}()

	sigChan := make(chan os.Signal)
	signal.Notify(sigChan, os.Interrupt)
	signal.Notify(sigChan, os.Kill)
	sig := <-sigChan
	l.Println("Received Terminate graceful Shutdow", sig)
	tc, _ := context.WithTimeout(context.Background(), 30*time.Second)
	s.Shutdown(tc)

}
