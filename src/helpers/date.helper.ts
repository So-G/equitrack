export const getShortDate = (dateString: string): string | Date => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr')
}
