import { motion } from 'framer-motion'
import NextLink from 'next/link'
import type { Author } from '../types/Author'

export type AuthorCircleProps = {
  author: Author
}

export const AuthorCircle: React.VFC<AuthorCircleProps> = (props) => {
  const {
    author: { id, avatar_url, name },
  } = props

  return (
    <NextLink href={`/authors/${id}`} passHref>
      <a className="space-y-4 flex flex-col items-center group">
        <img
          className="w-16 h-16 rounded-full lg:w-20 lg:h-20 flex items-center justify-center text-3xl group-hover:ring-2 group-hover:ring-offset-2 transition bg-gray-200 group-hover:ring-indigo-600"
          src={avatar_url}
        />
        <div className="font-medium text-sm space-y-2">
          <motion.h3 layoutId={`author-name-${id}`}>{name}</motion.h3>
        </div>
      </a>
    </NextLink>
  )
}
