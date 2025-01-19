import type { Action } from '@/interfaces'
import { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useBlockActions(editor: ShallowRef<Editor | undefined>) {
  const blockActions: Action[] = [
    {
      icon: 'jam:clear-format',
      value: 'clear',
      action: () => editor.value?.chain().focus().clearNodes().run(),
      isActive: () => false,
      isDisabled: () => false
    },
    {
      icon: 'jam:paragraph',
      value: 'paragraph',
      action: () => editor.value?.chain().focus().setParagraph().run(),
      isActive: () => editor.value?.isActive('paragraph'),
      isDisabled: () => false
    },

    {
      icon: 'jam:quote',
      value: 'blockquote',
      action: () => editor.value?.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.value?.isActive('blockquote'),
      isDisabled: () => false
    },
    {
      icon: 'jam:minus',
      value: 'horizontalRule',
      action: () => editor.value?.chain().focus().setHorizontalRule().run(),
      isActive: () => false,
      isDisabled: () => false
    }
  ]

  return {
    blockActions
  }
}
