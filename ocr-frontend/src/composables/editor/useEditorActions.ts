import {
  useTextStyleActions,
  useAlignActions,
  useHeadingActions,
  useBlockActions,
  useHistoryActions
} from '@/composables/actions'
import { Editor } from '@tiptap/vue-3'
import type { ShallowRef } from 'vue'

export function useEditorActions(editor: ShallowRef<Editor | undefined>) {
  const { textStyleActions } = useTextStyleActions(editor)
  const { alignActions } = useAlignActions(editor)
  const { headingActions } = useHeadingActions(editor)
  const { blockActions } = useBlockActions(editor)
  const { historyActions } = useHistoryActions(editor)

  return {
    textStyleActions,
    alignActions,
    headingActions,
    blockActions,
    historyActions
  }
}
