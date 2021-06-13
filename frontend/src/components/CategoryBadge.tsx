import type { Category } from '../types/Category'
import NextLink from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const colourClasses = {
	red: 'bg-red-100 text-red-800',
	yellow: 'bg-yellow-100 text-yellow-800',
	green: 'bg-green-100 text-green-800',
	blue: 'bg-blue-100 text-blue-800',
	indigo: 'bg-indigo-100 text-indigo-800',
	purple: 'bg-purple-100 text-purple-800',
	pink: 'bg-pink-100 text-pink-800',
}

export type CategoryBadgeProps = {
	category: Pick<Category, 'id' | 'colour' | 'title'>
	layoutId?: string
}

export const CategoryBadge: React.VFC<CategoryBadgeProps> = (props) => {
	const {
		category: { id, colour, title },
		layoutId,
	} = props

	return (
		<motion.div layoutId={layoutId}>
			<NextLink href={`/categories/${id}`} passHref>
				<a className="inline-block">
					<span
						className={clsx(
							'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
							colourClasses[colour]
						)}
					>
						{title}
					</span>
				</a>
			</NextLink>
		</motion.div>
	)
}
