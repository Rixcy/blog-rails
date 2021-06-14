/**
 * Truncate a string by x characters, appending ... to the end
 * @example truncateString("My really short paragraph", 2) => "My..."
 */
export const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}
