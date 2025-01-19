// useFileReader.ts
import { ref } from 'vue'

export function useFileReader() {
  const imageUrl = ref<string | null>(null)
  const file = ref<File | null>(null)

  const readFile = (selectedFile: File) => {
    if (selectedFile.type.startsWith('image/')) {
      file.value = selectedFile
      const reader = new FileReader()
      reader.onload = (e) => {
        imageUrl.value = e.target?.result as string
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files?.length) {
      const selectedFile = target.files[0]
      readFile(selectedFile)
    }
  }

  const removeImage = () => {
    imageUrl.value = null
    file.value = null
  }

  return {
    imageUrl,
    file,
    readFile,
    handleFileChange,
    removeImage
  }
}
