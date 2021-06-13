export type CategoryColour = 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'

export type Category = {
	id: number
	title: string
	colour: CategoryColour
	created_at: string
	updated_at: string
}
