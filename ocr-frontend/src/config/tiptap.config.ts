import StarterKit from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import { Export } from '@tiptap-pro/extension-export'

export const extensions = [
  StarterKit,
  TextStyle,
  TextAlign.configure({
    types: ['heading', 'paragraph']
  }),
  Export.configure({
    appId: import.meta.env.VITE_TIP_TAP_APP_ID,
    token: import.meta.env.VITE_TIP_TAP_TOKEN
  })
]

export const editorProps = {
  attributes: {
    class: 'p-10 overflow-y-auto outline-none prose max-w-none'
  }
}
