import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import type { Author } from '../types/Author'
import { jsonHeader } from '../utils/fetch'
import { apiUrl } from '../utils/api-url'
import { Button } from './Button'
import { Input } from './Input'

type FormData = {
  name: string
  avatar_url?: string
  location?: string
  tagline?: string
}

const schema = yup.object().shape({
  name: yup.string().required('Please provide a name for the author'),
  avatar_url: yup.string().url('Please provide a valid URL'),
})

export const NewAuthorForm: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    let avatarUrl = data.avatar_url || `https://robohash.org/${data.name}`

    const res = await fetch(apiUrl('authors'), {
      method: 'POST',
      body: JSON.stringify({
        name: data.name,
        avatar_url: avatarUrl,
        location: data.location,
        tagline: data.tagline,
      }),
      ...jsonHeader,
    })

    const newAuthor: Author = await res.json()

    if (res.status === 201) router.push(`/authors/${newAuthor.id}`)
  })

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto flex flex-col">
      <Input
        {...register('name')}
        label="Name"
        placeholder="Joe Bloggs"
        errorMessage={errors?.name?.message}
      />
      <Input
        {...register('tagline')}
        label="Tagline (optional)"
        placeholder="The best thing about a boolean is even if you're wrong, you're only off by a bit."
      />
      <Input
        {...register('avatar_url')}
        label="Avatar URL (optional)"
        placeholder="https://robohash.org/joe-bloggs"
        errorMessage={errors?.avatar_url?.message}
      />
      <Input
        {...register('location')}
        label="Location (optional)"
        placeholder="Leeds"
      />
      <Button type="submit" className="ml-auto">
        Create
      </Button>
    </form>
  )
}
