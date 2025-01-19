import type { Action } from '@/interfaces'
import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useHistoryActions(editor: ShallowRef<Editor | undefined>) {
  const historyActions: Action[] = [
    {
      icon: 'jam:undo',
      value: 'undo',
      action: () => editor.value?.chain().focus().undo().run(),
      isActive: () => false,
      isDisabled: () => !editor.value?.can().chain().focus().undo().run()
    },
    {
      icon: 'jam:redo',
      value: 'redo',
      action: () => editor.value?.chain().focus().redo().run(),
      isActive: () => false,
      isDisabled: () => !editor.value?.can().chain().focus().redo().run()
    }
  ]

  return {
    historyActions
  }
}
