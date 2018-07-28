package main

import (
	"fmt"

	r "gopkg.in/gorethink/gorethink.v4"
)

type User struct {
	Id   string `gorethink:"id,omitempty"`
	Name string `gorethink:"name"`
}

func main() {
	session, err := r.Connect(r.ConnectOpts{
		Address:  "localhost:28015",
		Database: "rtsupport",
	})
	if err != nil {
		fmt.Println(err)
		return
	}
	// response, err := r.Table("user").
	// 	Insert(user).
	// 	RunWrite(session)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return
	// }

	user := User{
		Name: "Davydov Evgeny",
	}

	response, _ := r.Table("user").
		Get("b453058d-bbff-4702-92b8-3d7310b6697a").
		Update(user).
		RunWrite(session)

	fmt.Printf("%#v\n", response)
}
