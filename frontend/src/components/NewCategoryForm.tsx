import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as yup from 'yup'
import type { Category } from '../types/Category'
import { ColourSelect } from './ColourSelect'
import type { Colour } from '../types/Colour'
import { jsonHeader } from '../utils/fetch'
import { apiUrl } from '../utils/api-url'
import { Button } from './Button'
import { Input } from './Input'

type FormData = {
  title: string
}

const schema = yup.object().shape({
  title: yup.string().required('Please provide a name for the category'),
})

export const NewCategoryForm: React.VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const router = useRouter()

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch(apiUrl('categories'), {
      method: 'POST',
      body: JSON.stringify({
        colour: selectedColour,
        title: data.title,
      }),
      ...jsonHeader,
    })

    const newCategory: Category = await res.json()

    if (res.status === 201) router.push(`/categories/${newCategory.id}`)
  })

  const [selectedColour, setSelectedColour] = useState<Colour>('red')

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto flex flex-col">
      <Input
        {...register('title')}
        label="Title"
        errorMessage={errors?.title?.message}
        placeholder="Your Category"
      />
      <ColourSelect onChange={(colour) => setSelectedColour(colour)} />
      <Button type="submit" className="ml-auto">
        Create
      </Button>
    </form>
  )
}
