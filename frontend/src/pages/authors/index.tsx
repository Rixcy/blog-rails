import type { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { AuthorsHeader } from '../../components/AuthorsHeader'
import { AuthorCircle } from '../../components/AuthorCircle'
import type { Author } from '../../types/Author'
import { apiUrl } from '../../utils/api-url'
import { Meta } from '../../components/Meta'

export default function Authors({
  authors,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer>
      <Meta title="Authors" />
      <AuthorsHeader />
      <ul className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6 lg:max-w-3xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4 pt-6">
        {authors.map((author) => (
          <li key={author.id}>
            <AuthorCircle author={author} />
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(apiUrl('authors'))

  const authors: Author[] = await res.json()

  return {
    props: {
      authors,
    },
    revalidate: 10,
  }
}
