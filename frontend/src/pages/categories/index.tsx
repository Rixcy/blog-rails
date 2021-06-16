import type { InferGetStaticPropsType } from 'next'
import { CategoriesHeader } from '../../components/CategoriesHeader'
import { ColouredCircle } from '../../components/ColouredCircle'
import { PageContainer } from '../../components/PageContainer'
import type { Category } from '../../types/Category'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'

export default function Categories({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer>
      <Meta title="Categories" />
      <CategoriesHeader />
      <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-3xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4 pt-6">
        {categories.map((category) => (
          <li key={category.id}>
            <ColouredCircle
              titleLayoutId={`category-title-${category.id}`}
              title={category.title}
              link={`/categories/${category.id}`}
              colour={category.colour}
            />
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
    revalidate: 10,
  }
}
