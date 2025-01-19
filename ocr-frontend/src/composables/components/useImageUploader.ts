import { useImageStore } from '@/store/image.store'

export function useImageUploader() {
  const imageStore = useImageStore()

  const uploadImage = async (file: File) => {
    if (file) {
      await imageStore.uploadImage(file)
    }
  }

  return {
    uploadImage
  }
}
