package data

import (
	"encoding/json"
	"io"
)

type User struct {
	PKey   string      `json:"-"`
	SKey   string      `json:"-"`
	UserId string      `json:"userId"`
	Info   Information `json:"info"`
}

type Information struct {
	Name    string   `json:"name"`
	Number  int      `json:"number"`
	Status  string   `json:"status"`
	Friends []string `json:"friends"`
}
type Users []*User

func (users *Users) ToJSON(w io.Writer) error {
	en := json.NewEncoder(w)
	return en.Encode(users)
}

//getter for the data
func GetUsers() Users {
	return userList
}

// example data source
var userList = []*User{
	&User{
		PKey:   "ID#1234",
		SKey:   "USER#Arnold123",
		UserId: "1234",
		Info: Information{
			Name:    "Arnold , Sax",
			Number:  921345,
			Status:  "Live high . Live life",
			Friends: []string{"1235", "1236"},
		},
	},
	&User{
		PKey:   "ID#1235",
		SKey:   "USER#Cassie09",
		UserId: "1235",
		Info: Information{
			Name:    "Cassie , Beuth",
			Number:  921378,
			Status:  "Live high . Live life",
			Friends: []string{"1234", "1236"},
		},
	},
	&User{
		PKey:   "ID#1236",
		SKey:   "USER#Sam12",
		UserId: "1236",
		Info: Information{
			Name:    "Sam , Rex",
			Number:  921378,
			Status:  "Live high . Live life",
			Friends: []string{"1234", "1235"},
		},
	},
}
