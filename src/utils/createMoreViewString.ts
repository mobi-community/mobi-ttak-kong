export const createMoreViewString = (content: string, maxLength: number) => {
  if (content.length > maxLength) {
    const shortContent = content.slice(0, maxLength) + '...'
    return shortContent
  }
  return content
}
