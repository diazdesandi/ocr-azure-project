import imageUrl from '@/api/imageUrlApi'
import type { Response } from '@/interfaces'
import { defineStore } from 'pinia'

export const useImageStore = defineStore('image', {
  state: () => ({
    image: null as File | null,
    response: {} as Response,
    loading: false,
    error: null as string | null
  }),
  actions: {
    async uploadImage(file: File) {
      this.loading = true
      this.error = null
      try {
        const formData = new FormData()
        formData.append('file', file)
        const { data } = await imageUrl.post('/ocr', formData)
        this.response = data
        console.log(data)
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async getStatus() {
      this.loading = true
      this.error = null
      try {
        const resp = await imageUrl.get('')
        console.log(resp)
        // this.response = data
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    }
  },
  getters: {
    getMessage(state) {
      return state.response
    }
  }
})
