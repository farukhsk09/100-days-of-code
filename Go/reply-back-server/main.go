package main

import (
	"context"
	"example/reply-back-server/handlers"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/go-redis/redis"
)

func main() {

	//on handler path uses the handlers package reference
	l := log.New(os.Stdout, "sentiment-api ", log.LstdFlags)
	//create a redis client
	client := redis.NewClient(&redis.Options{
		Addr:     "localhost:8001",
		Password: "",
		DB:       0,
	})
	pong, err := client.Ping().Result()
	l.Println(pong, err)
	if err != nil {
		panic(err)
	}
	hh := handlers.NewHi(l)
	uh := handlers.NewUsers(l)
	th := handlers.NewToken(l, client)

	//create a serveMux and add the handler
	sm := http.NewServeMux()
	sm.Handle("/", hh)
	sm.Handle("/get", uh)
	sm.Handle("/validate", th)

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
