import { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { Category } from '../../types/Category'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'
import { CategoryHeader } from '../../components/CategoryHeader'

export default function CategoryPage({ category }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log({ category })
	return (
		<PageContainer>
			<Meta title="Categories" />
			<CategoryHeader key={`category_${category.id}`} category={category} />
			...Articles
		</PageContainer>
	)
}

export const getStaticProps = async ({ params }) => {
	const res = await fetch(apiUrl(`categories/${params.id}`))

	const category: Category = await res.json()

	return {
		props: {
			category,
		},
	}
}

export async function getStaticPaths() {
	const res = await fetch(apiUrl('categories'))

	const categories: Category[] = await res.json()

	const paths = categories.map((category) => ({
		params: { id: category.id.toString() },
	}))

	return {
		paths,
		fallback: false,
	}
}
