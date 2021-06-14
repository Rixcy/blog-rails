import { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { Article } from '../../types/Article'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'
import { ArticleHeader } from '../../components/ArticleHeader'
import { ArticleBody } from '../../components/ArticleBody'

export default function ArticlePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer>
      <Meta title={article.title} />
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
    </PageContainer>
  )
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
    fallback: false,
  }
}
