package main

import "fmt"

func main() {
	msgChan := make(chan string)
	go func() {
		msgChan <- "Hello"
	}()
	msg := <-msgChan
	fmt.Println(msg)
}
