import { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { SectionHeader } from '../../components/SectionHeader'
import { Category } from '../../types/Category'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'
import { CategoryItem } from '../../components/CategoryItem'

export default function Categories({ categories }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<PageContainer>
			<Meta title="Categories" />
			<SectionHeader
				title="Categories"
				tagline="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
			/>

			<ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-3xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4">
				{categories.map((category) => (
					<li key={category.id}>
						<CategoryItem category={category} />
					</li>
				))}
			</ul>
		</PageContainer>
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
