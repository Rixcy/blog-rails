import clsx from 'clsx'
import { Article } from '../types/Article'
import { truncateString } from '../utils/truncate-string'
import NextLink from 'next/link'
import { getReadingTime } from '../utils/get-reading-time'
import dayjs from 'dayjs'

export type ArticleCardProps = {
	article: Article
}

export const ArticleCard: React.VFC<ArticleCardProps> = (props) => {
	const {
		article: { id, title, body, category, author, updated_at },
	} = props

	const colourClasses = {
		red: 'bg-red-100 text-red-800',
		yellow: 'bg-yellow-100 text-yellow-800',
		green: 'bg-green-100 text-green-800',
		blue: 'bg-blue-100 text-blue-800',
		indigo: 'bg-indigo-100 text-indigo-800',
		purple: 'bg-purple-100 text-purple-800',
		pink: 'bg-pink-100 text-pink-800',
	}

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
			<div>
				<NextLink href={`/categories/${category.id}`} passHref>
					<a className="inline-block">
						<span
							className={clsx(
								'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
								colourClasses[category.colour]
							)}
						>
							{category.title}
						</span>
					</a>
				</NextLink>
			</div>
			<NextLink href={`/articles/${id}`} passHref>
				<a className="block mt-4 text-left">
					<p className="text-xl font-semibold text-gray-900">{title}</p>
					<p className="mt-3 text-base text-gray-500">{truncateString(body, 80)}</p>
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
					<p className="text-sm font-medium text-gray-900 text-left">
						<NextLink href={`/authors/${author.id}`} passHref>
							<a>{author.name}</a>
						</NextLink>
					</p>
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
