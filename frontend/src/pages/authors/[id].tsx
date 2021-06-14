import { InferGetStaticPropsType } from 'next'
import { PageContainer } from '../../components/PageContainer'
import { ArticleCard } from '../../components/ArticleCard'
import { Author } from '../../types/Author'
import { Article } from '../../types/Article'
import { Meta } from '../../components/Meta'
import { apiUrl } from '../../utils/api-url'
import { AuthorHeader } from '../../components/AuthorHeader'

export default function AuthorPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { author, articles } = props

  console.log({ articles })

  return (
    <PageContainer>
      <Meta title="Categories" />
      <AuthorHeader key={`author_${author.id}`} author={author} />
      <div className="grid gap-16 pt-6 md:pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {articles.map((article) => (
          <ArticleCard showAuthor={false} article={article} key={article.id} />
        ))}
      </div>
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
