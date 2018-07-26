package main

import (
	"net/http"
)

type Channel struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

func main() {
	router := NewRouter()

	router.Handle("channel add", addChannel)

	http.Handle("/", router)
	http.ListenAndServe(":5000", nil)
}
