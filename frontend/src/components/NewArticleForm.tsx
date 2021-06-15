import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as yup from 'yup'
import { CategorySelect } from './CategorySelect'
import type { Category } from '../types/Category'
import type { Article } from '../types/Article'
import type { Author } from '../types/Author'
import { AuthorSelect } from './AuthorSelect'
import { jsonHeader } from '../utils/fetch'
import { apiUrl } from '../utils/api-url'
import { Button } from './Button'
import { Input } from './Input'

type FormData = {
  title: string
  body: string
  category_id: string
  author_id: string
}

const schema = yup.object().shape({
  title: yup.string().required('Please provide a title for the article'),
  body: yup
    .string()
    .required('Please fill out some content')
    .min(10, 'The body of the article should be at least 10 characters long'),
})

export type NewArticleFormProps = {
  authors: Author[]
  initialAuthorId?: number
  categories: Category[]
  initialCategoryId?: number
}

export const NewArticleForm: React.VFC<NewArticleFormProps> = (props) => {
  const { authors, initialAuthorId, categories, initialCategoryId } = props

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch(apiUrl('articles'), {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        category_id: selectedCategory.id,
        author_id: selectedAuthor.id,
      }),
      ...jsonHeader,
    })

    const newArticle: Article = await res.json()

    if (res.status === 201) router.push(`/articles/${newArticle.id}`)
  })

  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto flex flex-col">
      <Input
        {...register('title')}
        label="Title"
        placeholder="My Article"
        errorMessage={errors?.title?.message}
      />
      <AuthorSelect
        authors={authors}
        onChange={(author) => setSelectedAuthor(author)}
        initialAuthorId={initialAuthorId}
      />
      <CategorySelect
        categories={categories}
        onChange={(category) => setSelectedCategory(category)}
        initialCategoryId={initialCategoryId}
      />
      {/* TODO: Replace entire textarea with rich markdown editor */}
      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-sm font-medium text-gray-700 text-left mb-1"
        >
          Body
        </label>
        <textarea
          rows={10}
          className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
          defaultValue={''}
          {...register('body')}
        />
      </div>
      <Button type="submit" className="ml-auto">
        Create
      </Button>
    </form>
  )
}
