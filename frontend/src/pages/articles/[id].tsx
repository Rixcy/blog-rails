import type { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { ArticleHeader } from '../../components/ArticleHeader'
import { ArticleBody } from '../../components/ArticleBody'
import type { Article } from '../../types/Article'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'

export default function ArticlePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return article ? (
    <PageContainer>
      <Meta title={article?.title} />
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
    </PageContainer>
  ) : null
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(apiUrl(`articles/${params.id}`))

  const article: Article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(apiUrl('articles'))

  const categories: Article[] = await res.json()

  const paths = categories.map((article) => ({
    params: { id: article.id.toString() },
  }))

  return {
    paths,
    fallback: true,
  }
}
