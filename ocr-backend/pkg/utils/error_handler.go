package utils

import (
	"backend/pkg/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func HandleErrors(handler func(c *gin.Context) error) gin.HandlerFunc {
	return func(c *gin.Context) {
		if err := handler(c); err != nil {
			c.Error(err)
			if len(c.Errors) > 0 {
				HandleContextErrors(c)
			} else {
				HandleGeneralErrors(c, err)
			}
		}
	}
}

// HandleContextErrors handles context errors
// Example of context errors:
// - c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// - c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
func HandleContextErrors(c *gin.Context) {
	if len(c.Errors) > 0 {
		for _, err := range c.Errors {
			println(err.Error())
		}
		response := models.Response{
			Ok:      false,
			Message: c.Errors[0].Error(),
		}
		c.JSON(http.StatusInternalServerError, response)
	}
}

// HandleGeneralErrors handles general errors
// Example of general errors:
// - log.Fatalf("Error loading .env file: %v", err)
// - log.Fatalf("Failed to run server: %v", err)
func HandleGeneralErrors(c *gin.Context, err error) {
	println(err.Error())
	response := models.Response{
		Ok:      false,
		Message: err.Error(),
	}
	c.JSON(http.StatusInternalServerError, response)
}
