import { motion } from 'framer-motion'
import NextLink from 'next/link'
import dayjs from 'dayjs'
import { getReadingTime } from '../utils/get-reading-time'
import type { Article } from '../types/Article'

export type ArticleCardFooterProps = {
	article: Article
	showAuthor?: boolean
}

export const ArticleCardFooter: React.VFC<ArticleCardFooterProps> = (props) => {
	const {
		article: { updated_at, body, id, author },
		showAuthor = true,
	} = props

	const WithAuthorLayout = () => (
		<>
			<div className="flex-shrink-0">
				<NextLink href={`/authors/${author.id}`} passHref>
					<a>
						<span className="sr-only">{author.name}</span>
						<img
							className="h-10 w-10 rounded-full bg-gray-200"
							src={author.avatar_url}
							alt={`${author.name}'s avatar`}
						/>
					</a>
				</NextLink>
			</div>
			<div className="ml-3">
				<motion.p
					className="text-sm font-medium text-gray-900 text-left"
					layoutId={`author-name-${id}`}
				>
					<NextLink href={`/authors/${author.id}`} passHref>
						<a>{author.name}</a>
					</NextLink>
				</motion.p>
				<div className="flex space-x-1 text-sm text-gray-500">
					<time dateTime={updated_at}>{dayjs(updated_at).format('MMM DD, YYYY')}</time>
					<span aria-hidden="true">&middot;</span>
					<span>{getReadingTime(body)}</span>
				</div>
			</div>
		</>
	)

	const WithoutAuthorLayout = () => (
		<div className="flex flex-row items-center justify-between w-full">
			<motion.p
				className="text-sm font-medium text-gray-900 text-left"
				layoutId={`author-name-${id}`}
			>
				<NextLink href={`/authors/${author.id}`} passHref>
					<a>{author.name}</a>
				</NextLink>
			</motion.p>
			<div className="flex space-x-1 text-sm text-gray-500">
				<time dateTime={updated_at}>{dayjs(updated_at).format('MMM DD, YYYY')}</time>
				<span aria-hidden="true">&middot;</span>
				<span>{getReadingTime(body)}</span>
			</div>
		</div>
	)

	return (
		<div className="mt-6 flex items-center w-full">
			{showAuthor ? <WithAuthorLayout /> : <WithoutAuthorLayout />}
		</div>
	)
}
