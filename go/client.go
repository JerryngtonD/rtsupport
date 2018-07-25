package main

import (
	"golang.org/x/net/websocket"
)

type Message struct {
	Name string      `json:"name"`
	Data interface{} `json:"data":`
}

type Client struct {
	send   chan Message
	socket *websocket.Conn
}

func (client *Client) Read() {
	var message Message
	for {
		if err := client.socket.ReadJSON(&message); err != nil {
			break
		}
		//TODO: CALL HANDLE FUNCTION
	}
}

func (client *Client) Write() {
	for msg := range client.send {
		if err := client.socket.WriteJSON(msg); err != nil {
			break
		}
	}
	client.socket.Close()
}

func newClient(socket *websocket.Conn) *Client {
	return &Client{
		send:   make(chan Message),
		socket: socket,
	}
}
