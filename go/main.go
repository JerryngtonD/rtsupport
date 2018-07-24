package main

import (
	"fmt"
	"log"
	"time"

	"net/http"

	"github.com/gorilla/websocket"
	"github.com/mitchellh/mapstructure"
)

type Message struct {
	Name string      `json:"name"`
	Data interface{} `json:"data":`
}

type Channel struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":5000", nil)
}

func handler(w http.ResponseWriter, r *http.Request) {
	socket, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println(1)
		log.Printf("error upgrading %s", err)
		return
	}
	for {
		// msgType, msg, err := conn.ReadMessage()
		// if err != nil {
		// 	fmt.Println(err)
		// 	fmt.Println(2)
		// 	return
		// }
		var inMessage Message
		var outMessage Message
		if err := socket.ReadJSON(&inMessage); err != nil {
			fmt.Println(err)
			break
		}
		fmt.Printf("%#v\n", inMessage)
		switch inMessage.Name {
		case "channel add":
			err := addChannel(inMessage.Data)
			if err != nil {
				outMessage = Message{"error", err}
				if err := socket.WriteJSON(outMessage); err != nil {
					fmt.Println(err)
					break
				}
			}
		case "channel subscribe":
			go subscribeChannel(socket)
		}
		// fmt.Println(string(msg))
		// if err = conn.WriteMessage(msgType, msg); err != nil {
		// 	fmt.Println(err)
		// 	fmt.Println(3)
		// 	return
		// }
	}
}

func addChannel(data interface{}) error {
	var channel Channel
	err := mapstructure.Decode(data, &channel)

	if err != nil {
		return err
	}
	channel.Id = "1"
	fmt.Println("added channel")
	return nil
}

func subscribeChannel(socket *websocket.Conn) {
	//TODO: rethinkDB Query / changefeed
	for {
		time.Sleep(time.Second * 1)
		message := Message{"channel add",
			Channel{"1", "Software Support"}}
		socket.WriteJSON(message)
		fmt.Println("sent new channel")
	}
}
