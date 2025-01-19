package handlers

import (
	"backend/internal/services"
	"bytes"
	"github.com/gin-gonic/gin"
	"io"
	"mime/multipart"
	"net/http"
)

func TipTapHandler(c *gin.Context) error {
	file, err := c.FormFile("file")
	if err != nil {
		return err
	}

	// Open file
	src, err := file.Open()
	if err != nil {
		return err
	}
	defer func(src multipart.File) {
		err := src.Close()
		if err != nil {
			c.Error(err)
		}
	}(src)

	// Read file
	var buf bytes.Buffer
	_, err = io.Copy(&buf, src)
	if err != nil {
		return err
	}

	// Call Azure service
	azureResponse, err := services.CallAzureOCR(buf.Bytes())
	if err != nil {
		return err
	}

	// Send Azure response
	c.JSON(http.StatusOK, gin.H{"ok": true, "message": azureResponse})
	return nil
}
