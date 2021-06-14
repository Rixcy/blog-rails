import { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { Category } from '../../types/Category'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'
import { AuthorsHeader } from '../../components/AuthorsHeader'

export default function Authors({
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer>
      <Meta title="Authors" />
      <AuthorsHeader />
      <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-3xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4 pt-6">
        {authors.map((category) => (
          <li key={category.id}>stuff</li>
        ))}
      </ul>
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(apiUrl('authors'))

  const authors: Category[] = await res.json()

  return {
    props: {
      authors,
    },
  }
}
