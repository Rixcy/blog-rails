import type { InferGetStaticPropsType } from 'next'
import { ArticlesHeader } from '../../components/ArticlesHeader'
import { PageContainer } from '../../components/PageContainer'
import { ArticleCard } from '../../components/ArticleCard'
import type { Article } from '../../types/Article'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'

export default function Articles({
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const articlesCount = articles.length

  return (
    <PageContainer>
      <Meta title="Articles" />
      <ArticlesHeader articlesCount={articlesCount} />
      <div className="grid gap-16 pt-6 md:pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </PageContainer>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(apiUrl('articles'))

  const articles: Article[] = await res.json()

  return {
    props: {
      articles,
    },
  }
}
