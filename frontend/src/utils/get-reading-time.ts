export const getReadingTime = (content: string): string => {
	const wpm = 225
	const words = content.trim().split(/\s+/).length
	const time = Math.ceil(words / wpm)
	return `${time} minute read`
}
