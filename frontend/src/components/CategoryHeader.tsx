import clsx from 'clsx'
import NextLink from 'next/link'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'
import { Category } from '../types/Category'
import { motion } from 'framer-motion'

export type CategoryHeaderProps = {
	category: Category
	/**
	 * Optional text to show below the category title
	 * @example <CategoryHeader tagline="Excepteur sint occaecat cupidatat" />
	 */
	tagline?: string
}

export const CategoryHeader: React.VFC<CategoryHeaderProps> = (props) => {
	const {
		category: { id, title, colour },
		tagline,
	} = props

	const colourClasses = {
		red: 'text-red-600',
		yellow: 'text-yellow-600',
		green: 'text-green-600',
		blue: 'text-blue-600',
		indigo: 'text-indigo-600',
		purple: 'text-purple-600',
		pink: 'text-pink-600',
	}

	return (
		<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-3xl mb-12">
			<div className="flex flex-row">
				<div className="flex-1 flex">
					<NextLink href="/categories" passHref>
						<a className="flex flex-row items-center group transition text-sm text-gray-800">
							<ArrowNarrowLeftIcon className="w-6 h-5 pr-1 opacity-0 group-hover:opacity-100 animate-bounce-x" />
							<p>Back</p>
						</a>
					</NextLink>
				</div>
				<motion.h2
					className={clsx(
						'text-3xl font-extrabold tracking-tight sm:text-4xl',
						colourClasses[colour]
					)}
					layoutId={`category-title-${id}`}
				>
					{title}
				</motion.h2>
				<div className="flex-1" />
			</div>
			{tagline && <p className="text-xl text-gray-500">{tagline}</p>}
		</div>
	)
}
