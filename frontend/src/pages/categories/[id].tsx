import { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { SectionHeader } from '../../components/SectionHeader'
import { Category } from '../../types/Category'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'

export default function CategoryPage({ category }: InferGetStaticPropsType<typeof getStaticProps>) {
	console.log({ category })
	return (
		<PageContainer>
			<Meta title="Categories" />
			<SectionHeader
				key={`category_${category.id}`}
				title={category.title}
				titleColour={category.colour}
				backLink="/categories"
				tagline="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
			/>
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
