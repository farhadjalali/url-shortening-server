export function generateHash(num: number): string {
	const letters = []
	const characterMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	const charBase = characterMap.length

	while (num > 0) {
		letters.push(characterMap[num % charBase])
		num = Math.floor(num / charBase)
	}

	return letters.join("")
}
