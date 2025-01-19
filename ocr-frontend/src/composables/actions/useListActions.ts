import type { Action } from '@/interfaces'
import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useListActions(editor: ShallowRef<Editor | undefined>) {
  const listActions: Action[] = [
    {
      icon: 'jam:unordered-list',
      value: 'bulletList',
      action: () => editor.value?.chain().focus().toggleBulletList().run(),
      isActive: () => editor.value?.isActive('bulletList'),
      isDisabled: () => false
    },
    {
      icon: 'jam:ordered-list',
      value: 'orderedList',
      action: () => editor.value?.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.value?.isActive('orderedList'),
      isDisabled: () => false
    }
  ]

  return {
    listActions
  }
}
