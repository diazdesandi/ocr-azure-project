export interface Response {
  ok: boolean
  message: string[]
}

/* How does the response from Azure look like? */
/*
export interface AzureResponse {
  modelVersion: Date
  captionResult: CaptionResult
  metadata: Metadata
  readResult: ReadResult
}

export interface CaptionResult {
  text: string
  confidence: number
}

export interface Metadata {
  width: number
  height: number
}

export interface ReadResult {
  blocks: Block[]
}

export interface Block {
  lines: Line[]
}

export interface Line {
  text: string
  boundingPolygon: BoundingPolygon[]
  words: Word[]
}

export interface BoundingPolygon {
  x: number
  y: number
}

export interface Word {
  text: string
  boundingPolygon: BoundingPolygon[]
  confidence: number
}
*/
