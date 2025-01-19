import type { Action } from '@/interfaces'
import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useTextStyleActions(editor: ShallowRef<Editor | undefined>) {
  const textStyleActions: Action[] = [
    {
      icon: 'jam:bold',
      value: 'bold',
      action: () => editor.value?.chain().focus().toggleBold().run(),
      isActive: () => editor.value?.isActive('bold'),
      isDisabled: () => !editor.value?.can().chain().focus().toggleBold().run()
    },
    {
      icon: 'jam:italic',
      value: 'italic',
      action: () => editor.value?.chain().focus().toggleItalic().run(),
      isActive: () => editor.value?.isActive('italic'),
      isDisabled: () => !editor.value?.can().chain().focus().toggleItalic().run()
    },
    {
      icon: 'jam:strikethrough',
      value: 'strike',
      action: () => editor.value?.chain().focus().toggleStrike().run(),
      isActive: () => editor.value?.isActive('strike'),
      isDisabled: () => !editor.value?.can().chain().focus().toggleStrike().run()
    }
  ]

  return {
    textStyleActions
  }
}
