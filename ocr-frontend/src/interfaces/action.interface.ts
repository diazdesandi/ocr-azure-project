export interface Action {
  icon: string
  value: string
  action: () => void
  isActive: () => boolean | undefined
  isDisabled: () => boolean | undefined
}
