import { useEditor } from '@tiptap/vue-3'
import { useImageStore } from '@/store/image.store'
import { extensions, editorProps } from '@/config/tiptap.config'

export function useEditorLifecycle() {
  const editor = useEditor({
    extensions,
    editorProps
  })

  const imageStore = useImageStore()

  const updateEditor = () => {
    if (editor.value) {
      editor.value.chain().focus().clearContent().run()

      imageStore.response.message.forEach((message: string) => {
        editor.value!.chain().focus().insertContent(`<p>${message}</p>`).run()
      })
    }
  }

  // const exportDoc = () => {
  //   editor.value
  //     ?.chain()
  //     .focus()
  //     .export({
  //       format: 'docx',
  //       content: editor.value?.getJSON()
  //     })
  //     .run()
  // }

  const exportDoc = async () => {
    try {
      const response = await fetch('https://api.tiptap.dev/v1/convert/export', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_TOKEN_HERE`,
          'App-Id': 'YOUR_APP_ID_HERE'
        },
        body: JSON.stringify({
          format: 'docx',
          content: editor.value?.getJSON()
        })
      })

      if (!response.ok) {
        throw new Error('Error al exportar el documento')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'document.docx'
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (error) {
      console.error('Error al exportar:', error)
    }
  }

  return {
    editor,
    updateEditor,
    exportDoc
  }
}
