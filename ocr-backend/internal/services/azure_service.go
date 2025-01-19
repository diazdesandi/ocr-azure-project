package services

import (
	"backend/pkg/utils"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

func CallAzureOCR(imageData []byte) ([]string, error) {
	// Get endpoints and keys from environment variables
	VisionKey := os.Getenv("VISION_KEY")
	VisionEndpoint := os.Getenv("VISION_ENDPOINT")

	// Create POST request
	req, err := http.NewRequest("POST", VisionEndpoint, bytes.NewReader(imageData))
	if err != nil {
		return nil, utils.HandleError(err)
	}

	// Headers
	req.Header.Set("Content-Type", "application/octet-stream")
	req.Header.Set("Ocp-Apim-Subscription-Key", VisionKey)

	// Use client to send request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, utils.HandleError(err)
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			fmt.Println(err)
		}
	}(resp.Body)

	// Read response
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, utils.HandleError(err)
	}

	// Check status
	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("error: %s", string(body))
	}

	// Unmarshal response
	azureResponse := map[string]interface{}{}
	err = json.Unmarshal(body, &azureResponse)
	if err != nil {
		return nil, utils.HandleError(err)
	}

	// Slice with the words extracted
	var texts []string

	// Extract words from the response
	readResult := azureResponse["readResult"].(map[string]interface{})
	blocks := readResult["blocks"].([]interface{})

	// Iterate over the blocks
	for _, block := range blocks {
		blockMap := block.(map[string]interface{})
		lines := blockMap["lines"].([]interface{})

		for _, line := range lines {
			lineMap := line.(map[string]interface{})
			// Add entire line to the slice
			lineText := lineMap["text"].(string)
			texts = append(texts, lineText)
		}
	}

	// Return the slice with the words
	return texts, nil
}
