import type { Action } from '@/interfaces'
import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useAlignActions(editor: ShallowRef<Editor | undefined>) {
  const alignActions: Action[] = [
    {
      icon: 'jam:align-left',
      value: 'left',
      action: () => editor.value?.chain().focus().setTextAlign('left').run(),
      isActive: () => editor.value?.isActive('align', { align: 'left' }),
      isDisabled: () => false
    },
    {
      icon: 'jam:align-center',
      value: 'center',
      action: () => editor.value?.chain().focus().setTextAlign('center').run(),
      isActive: () => editor.value?.isActive('align', { align: 'center' }),
      isDisabled: () => false
    },
    {
      icon: 'jam:align-right',
      value: 'right',
      action: () => editor.value?.chain().focus().setTextAlign('right').run(),
      isActive: () => editor.value?.isActive('align', { align: 'right' }),
      isDisabled: () => false
    },
    {
      icon: 'jam:align-justify',
      value: 'justify',
      action: () => editor.value?.chain().focus().setTextAlign('justify').run(),
      isActive: () => editor.value?.isActive('align', { align: 'justify' }),
      isDisabled: () => false
    }
  ]

  return {
    alignActions
  }
}
