import { motion } from 'framer-motion'
import NextLink from 'next/link'
import clsx from 'clsx'
import { truncateString } from '../utils/truncate-string'
import { ArticleCardFooter } from './ArticleCardFooter'
import { CategoryBadge } from './CategoryBadge'
import type { Article } from '../types/Article'
import ReactMarkdown from 'react-markdown'
import stripMarkdown from 'strip-markdown'

export type ArticleCardProps = {
	article: Article
	showAuthor?: boolean
}

export const ArticleCard: React.VFC<ArticleCardProps> = (props) => {
	const {
		article: { id, title, body, category },
		showAuthor = true,
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
					<motion.div
						layoutId={`article-body-${id}`}
						className="mt-3 text-base text-gray-500"
					>
						<ReactMarkdown components={{ p: 'span' }} plugins={[stripMarkdown]}>
							{truncateString(body, 80)}
						</ReactMarkdown>
					</motion.div>
				</a>
			</NextLink>
			<ArticleCardFooter showAuthor={showAuthor} article={props.article} />
		</div>
	)
}
