package utils

import (
	"log"
	"os"
)

func InitEnv() {
	requiredEnvVars := []string{
		"VISION_ENDPOINT",
		"VISION_KEY",
	}

	for _, envVar := range requiredEnvVars {
		if os.Getenv(envVar) == "" {
			log.Fatalf("Environment variable %s is required but not set", envVar)
		}
	}
}
