import { TAB_INDEX } from '@constants'

export function getTabIndex(isSelected) {
  if (isSelected) return TAB_INDEX.selected

  return TAB_INDEX.unselected
}
