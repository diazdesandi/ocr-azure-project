package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Response struct {
	Ok 	bool   `json:"ok"`
	Message string `json:"message"`
}

type Image struct {
	File string `json:"file"`
}

func main() {
	router := gin.Default()
	router.GET("/", checkStatus)
	router.POST("/ocr", postImage)
	router.Run(":8080")
}

func checkStatus(c *gin.Context) {
	response := Response{
		Ok: true,
		Message: "All up and running!",
	}
	c.JSON(http.StatusOK, response)
}

func postImage(c *gin.Context) {

	file, err := c.FormFile("file")

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No file uploaded"})
		return
	}

	if err := c.SaveUploadedFile(file, "image.jpg"); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error saving file"})
		return
	}

	response := c.PostForm("response")

	c.JSON(http.StatusOK, gin.H{"file": file.Filename, "response": response})
}
