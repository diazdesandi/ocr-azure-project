package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)


type Response struct {
	ID	  string `json:"id"`
	Text  string `json:"text"`
}

func main() {
	router:= gin.Default()
	router.GET("/ocr", GetOcrText )
	router.Run(":8080")
}

func GetOcrText(c *gin.Context) {
	response := Response{
		ID: "1",
		Text: "Hello World",
	}
	c.JSON(http.StatusOK, response)
}

