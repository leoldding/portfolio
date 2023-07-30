package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/ping", ping)

	http.ListenAndServe(":8080", nil)
	return
}

func ping(w http.ResponseWriter, _ *http.Request) {
	w.WriteHeader(http.StatusOK)
	return
}
