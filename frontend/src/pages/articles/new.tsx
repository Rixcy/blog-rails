import type { InferGetStaticPropsType } from 'next'
import { NewArticleHeader } from '../../components/NewArticleHeader'
import { NewArticleForm } from '../../components/NewArticleForm'
import { PageContainer } from '../../components/PageContainer'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'
import { Author } from '../../types/Author'
import { useRouter } from 'next/router'
import { Category } from '../../types/Category'

export default function NewArticlePage({
  authors,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()

  const authorId = Number(router.query?.authorId as string)
  const categoryId = Number(router.query?.categoryId as string)

  return (
    <PageContainer>
      <Meta title="New Article" />
      <NewArticleHeader />
      <NewArticleForm
        authors={authors}
        categories={categories}
        initialAuthorId={authorId}
        initialCategoryId={categoryId}
      />
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const authorsRes = await fetch(apiUrl('authors'))

  const authors: Author[] = await authorsRes.json()

  const categoriesRes = await fetch(apiUrl('categories'))

  const categories: Category[] = await categoriesRes.json()

  return {
    props: {
      authors,
      categories,
    },
  }
}
