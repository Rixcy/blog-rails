import clsx from 'clsx'
import { Article } from '../types/Article'
import { truncateString } from '../utils/truncate-string'
import NextLink from 'next/link'
import { getReadingTime } from '../utils/get-reading-time'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { CategoryBadge } from './CategoryBadge'

export type ArticleCardProps = {
	article: Article
}

export const ArticleCard: React.VFC<ArticleCardProps> = (props) => {
	const {
		article: { id, title, body, category, author, updated_at },
	} = props

	const ringClasses = {
		red: 'hover:ring-red-300',
		yellow: 'hover:ring-yellow-300',
		green: 'hover:ring-green-300',
		blue: 'hover:ring-blue-300',
		indigo: 'hover:ring-indigo-300',
		purple: 'hover:ring-purple-300',
		pink: 'hover:ring-pink-300',
	}

	const hoverClasses = clsx(
		'hover:ring-2 hover:shadow-lg rounded-xl transition hover:bg-gray-50',
		ringClasses[category.colour]
	)

	return (
		<div className={clsx('flex flex-col items-start p-4', hoverClasses)}>
			<CategoryBadge category={category} layoutId={`article-category-${id}`} />
			<NextLink href={`/articles/${id}`} passHref>
				<a className="block mt-4 text-left">
					<motion.p
						className="text-xl font-semibold text-gray-900"
						layoutId={`article-title-${id}`}
					>
						{title}
					</motion.p>
					<motion.p
						layoutId={`article-body-${id}`}
						className="mt-3 text-base text-gray-500"
					>
						{truncateString(body, 80)}
					</motion.p>
				</a>
			</NextLink>
			<div className="mt-6 flex items-center">
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
						<time dateTime={updated_at}>
							{dayjs(updated_at).format('MMM DD, YYYY')}
						</time>
						<span aria-hidden="true">&middot;</span>
						<span>{getReadingTime(body)}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
