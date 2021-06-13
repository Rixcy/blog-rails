import clsx from 'clsx'
import NextLink from 'next/link'
import { Category } from '../types/Category'
import { motion } from 'framer-motion'

export type CategoryItemProps = {
	category: Category
}

export const CategoryItem: React.VFC<CategoryItemProps> = (props) => {
	const {
		category: { id, title, colour },
	} = props

	const colourClasses = {
		red: 'bg-red-100 text-red-900 group-hover:ring-red-600',
		yellow: 'bg-yellow-100 text-yellow-900 group-hover:ring-yellow-600',
		green: 'bg-green-100 text-green-900 group-hover:ring-green-600',
		blue: 'bg-blue-100 text-blue-900 group-hover:ring-blue-600',
		indigo: 'bg-indigo-100 text-indigo-900 group-hover:ring-indigo-600',
		purple: 'bg-purple-100 text-purple-900 group-hover:ring-purple-600',
		pink: 'bg-pink-100 text-pink-900 group-hover:ring-pink-600',
	}

	return (
		<NextLink href={`/categories/${id}`} passHref>
			<a className="space-y-4 flex flex-col items-center group">
				<div
					className={clsx(
						'w-16 h-16 rounded-full lg:w-20 lg:h-20 flex items-center justify-center text-3xl group-hover:ring-2 group-hover:ring-offset-2 transition',
						colourClasses[colour]
					)}
				>
					{title.slice(0, 1)}
				</div>
				<div className="font-medium text-sm space-y-2">
					<motion.h3 layoutId={`category-title-${id}`}>{title}</motion.h3>
					<p className="text-gray-800">10 Articles</p>
				</div>
			</a>
		</NextLink>
	)
}
