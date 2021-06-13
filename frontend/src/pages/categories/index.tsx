import { InferGetStaticPropsType } from 'next'
import { Meta } from '../../components/Meta'
import { Category } from '../../types/Category'
import { apiUrl } from '../../utils/api-url'

export default function Categories({ categories }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Meta title="Categories" />
			<ul className="list-inside list-disc">
				{categories.map((category) => (
					<li key={category.id}>{category.title}</li>
				))}
			</ul>
		</>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(apiUrl('categories'))

	const categories: Category[] = await res.json()

	return {
		props: {
			categories,
		},
	}
}
