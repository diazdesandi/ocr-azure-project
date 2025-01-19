package models

// Response.go

type AzureResponse struct {
	ModelVersion  string        `json:"modelVersion"`
	CaptionResult CaptionResult `json:"captionResult"`
	Metadata      Metadata      `json:"metadata"`
	ReadResult    ReadResult    `json:"readResult"`
}

// CaptionResult.go

type CaptionResult struct {
	Text       string  `json:"text"`
	Confidence float64 `json:"confidence"`
}

// Metadata.go

type Metadata struct {
	Width  int64 `json:"width"`
	Height int64 `json:"height"`
}

// ReadResult.go

type ReadResult struct {
	Blocks []Block `json:"blocks"`
}

// Block.go

type Block struct {
	Lines []Line `json:"lines"`
}

// Line.go

type Line struct {
	Text            string            `json:"text"`
	BoundingPolygon []BoundingPolygon `json:"boundingPolygon"`
	Words           []Word            `json:"words"`
}

// BoundingPolygon.go

type BoundingPolygon struct {
	X int64 `json:"x"`
	Y int64 `json:"y"`
}

// Word.go

type Word struct {
	Text            string            `json:"text"`
	BoundingPolygon []BoundingPolygon `json:"boundingPolygon"`
	Confidence      float64           `json:"confidence"`
}
