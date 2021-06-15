/**
 * This function can be used to easily output an API URL. It includes the initial forward slash by default
 * @example apiUrl('categories')
 */
export const apiUrl = (url: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}/${url}`
