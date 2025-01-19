import type { Action } from '@/interfaces'
import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useCodeActions(editor: ShallowRef<Editor | undefined>) {
  const codeActions: Action[] = [
    {
      icon: 'jam:code-sample',
      value: 'code',
      action: () => editor.value?.chain().focus().toggleCode().run(),
      isActive: () => editor.value?.isActive('code'),
      isDisabled: () => !editor.value?.can().chain().focus().toggleCode().run()
    },
    {
      icon: 'jam:code',
      value: 'codeBlock',
      action: () => editor.value?.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.value?.isActive('codeBlock'),
      isDisabled: () => false
    }
  ]

  return {
    codeActions
  }
}
