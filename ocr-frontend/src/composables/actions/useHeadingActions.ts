import type { Action } from '@/interfaces'
import type { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useHeadingActions(editor: ShallowRef<Editor | undefined>) {
  const headingActions: Action[] = [
    {
      icon: 'jam:header-1',
      value: 'heading-1',
      action: () => editor.value?.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.value?.isActive('heading', { level: 1 }),
      isDisabled: () => false
    },
    {
      icon: 'jam:header-2',
      value: 'heading-2',
      action: () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.value?.isActive('heading', { level: 2 }),
      isDisabled: () => false
    },
    {
      icon: 'jam:header-3',
      value: 'heading-3',
      action: () => editor.value?.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.value?.isActive('heading', { level: 3 }),
      isDisabled: () => false
    },
    {
      icon: 'jam:header-4',
      value: 'heading-4',
      action: () => editor.value?.chain().focus().toggleHeading({ level: 4 }).run(),
      isActive: () => editor.value?.isActive('heading', { level: 4 }),
      isDisabled: () => false
    },
    {
      icon: 'jam:header-5',
      value: 'heading-5',
      action: () => editor.value?.chain().focus().toggleHeading({ level: 5 }).run(),
      isActive: () => editor.value?.isActive('heading', { level: 5 }),
      isDisabled: () => false
    },
    {
      icon: 'jam:header-6',
      value: 'heading-6',
      action: () => editor.value?.chain().focus().toggleHeading({ level: 6 }).run(),
      isActive: () => editor.value?.isActive('heading', { level: 6 }),
      isDisabled: () => false
    }
  ]

  return {
    headingActions
  }
}
