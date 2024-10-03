export const getShortDate = (dateString: string | Date): string | Date => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr')
}
