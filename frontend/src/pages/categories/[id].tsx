import type { InferGetStaticPropsType } from 'next'
import { NoCategoryArticlesText } from '../../components/NoCategoryArticlesText'
import { CategoryHeader } from '../../components/CategoryHeader'
import { PageContainer } from '../../components/PageContainer'
import { ArticleCard } from '../../components/ArticleCard'
import type { Category } from '../../types/Category'
import type { Article } from '../../types/Article'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'

export default function CategoryPage({
  category,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageContainer>
      <Meta title="Categories" />
      <CategoryHeader key={`category_${category.id}`} category={category} />
      {articles.length > 0 ? (
        <div className="grid gap-16 pt-6 md:pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      ) : (
        <NoCategoryArticlesText categoryId={category.id} />
      )}
    </PageContainer>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(apiUrl(`categories/${params.id}`))

  const category: Category = await res.json()

  const articlesRes = await fetch(apiUrl(`categories/${params.id}/articles`))

  const articles: Article[] = await articlesRes.json()

  return {
    props: {
      category,
      articles,
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
