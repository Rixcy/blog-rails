import type { InferGetStaticPropsType } from 'next'
import { NoAuthorArticlesText } from '../../components/NoAuthorArticlesText'
import { PageContainer } from '../../components/PageContainer'
import { AuthorHeader } from '../../components/AuthorHeader'
import { ArticleCard } from '../../components/ArticleCard'
import type { Article } from '../../types/Article'
import type { Author } from '../../types/Author'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'

export default function AuthorPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { author, articles } = props

  return (
    <PageContainer>
      <Meta title={author.name} />
      <AuthorHeader key={`author_${author.id}`} author={author} />
      {articles.length > 0 ? (
        <div className="grid gap-16 pt-6 md:pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {articles.map((article) => (
            <ArticleCard
              showAuthor={false}
              article={article}
              key={article.id}
            />
          ))}
        </div>
      ) : (
        <NoAuthorArticlesText authorId={author.id} />
      )}
    </PageContainer>
  )
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(apiUrl(`authors/${params.id}`))

  const author: Author = await res.json()

  const articlesRes = await fetch(apiUrl(`authors/${params.id}/articles`))

  const articles: Article[] = await articlesRes.json()

  return {
    props: {
      author,
      articles,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(apiUrl('authors'))

  const categories: Author[] = await res.json()

  const paths = categories.map((author) => ({
    params: { id: author.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}
