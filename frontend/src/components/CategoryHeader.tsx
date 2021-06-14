import clsx from 'clsx'
import { Category } from '../types/Category'
import { motion } from 'framer-motion'
import { SectionHeaderWrapper } from './SectionHeaderWrapper'
import { BouncingLink } from './BouncingLink'

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
		<SectionHeaderWrapper>
			<div className="flex flex-row">
				<div className="flex-1 hidden md:flex">
					<BouncingLink direction="left" linkText="All Categories" link="/categories" />
				</div>
				<motion.h2
					className={clsx(
						'text-3xl font-extrabold tracking-tight sm:text-4xl flex-1 md:flex-auto',
						colourClasses[colour]
					)}
					layoutId={`category-title-${id}`}
				>
					{title}
				</motion.h2>
				<div className="flex-1 hidden md:flex justify-end">
					<BouncingLink direction="right" linkText="All Articles" link="/articles" />
				</div>
			</div>
			{tagline && <p className="text-xl text-gray-500">{tagline}</p>}
		</SectionHeaderWrapper>
	)
}
