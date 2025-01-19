package handlers

import (
	"backend/pkg/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CheckStatus(c *gin.Context) error {
	response := models.Response{
		Ok:      true,
		Message: "All up and running!",
	}
	c.JSON(http.StatusOK, response)
	return nil
}
