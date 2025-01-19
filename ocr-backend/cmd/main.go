package main

import (
	"backend/internal/handlers"
	"backend/pkg/utils"
	"github.com/dotenv-org/godotenvvault"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
	"os"
)

func main() {
	// Load environment variables
	if err := godotenvvault.Load(); err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
	// Initialize environment variables
	utils.InitEnv()

	port := ":" + func() string {
		if p := os.Getenv("PORT"); p != "" {
			return p
		}
		return "8080"
	}()

	router := gin.Default()
	router.Use(cors.Default())
	router.GET("/", utils.HandleErrors(handlers.CheckStatus))
	router.POST("/ocr", utils.HandleErrors(handlers.AzureHandler))

	// Run server and handle errors
	if err := router.Run(port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}

// Testing POST with local files

//func postImage(c *gin.Context) {
//
//	file, err := c.FormFile("file")
//
//	if err != nil {
//		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
//		return
//	}
//
//	if err := c.SaveUploadedFile(file, "./uploads/"+file.Filename); err != nil {
//		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
//		return
//	}
//
//	// response := Response{
//	// 	Ok: true,
//	// 	Message: `File "` + file.Filename + `" uploaded successfully`,
//	// }
//
//	response := Response{
//		Ok:      true,
//		Message: message,
//	}
//
//	c.JSON(http.StatusOK, response)
//}
