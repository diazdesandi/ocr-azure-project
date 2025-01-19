package models

type Response struct {
	Ok      bool   `json:"ok"`
	Message string `json:"message"`
}

type Error struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}
