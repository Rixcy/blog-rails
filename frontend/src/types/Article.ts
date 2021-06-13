import type { Author } from './Author'
import type { Category } from './Category'

export type OriginalArticle = {
	id: number
	title: string
	body: string
	created_at: string
	updated_at: string
	author_id: number
	category_id: number
}

export type Article = Omit<OriginalArticle, 'category_id' | 'author_id'> & {
	category: Pick<Category, 'id' | 'title' | 'colour'>
	author: Pick<Author, 'id' | 'name' | 'avatar_url'>
}
