package utils

import "fmt"

// HandleError is a helper function to handle errors
func HandleError(err error) error {
	if err != nil {
		return fmt.Errorf("error: %w", err)
	}
	return nil
}
