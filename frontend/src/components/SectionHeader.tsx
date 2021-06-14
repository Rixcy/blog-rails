import { SectionTitle } from './SectionTitle'
import { motion } from 'framer-motion'
import { SectionHeaderWrapper } from './SectionHeaderWrapper'
import { BouncingLink } from './BouncingLink'

export type SectionHeaderProps = {
	/**
	 * Title for the section
	 * @example <SectionHeader title="Categories" />
	 */
	title: string
	/**
	 * Optional layout ID for the title for framer-motion animations
	 * @example <SectionHeader titleLayoutId="article-title" />
	 */
	titleLayoutId?: string
	/**
	 * Optional text to show below the section title
	 * @example <SectionHeader tagline="Excepteur sint occaecat cupidatat" />
	 */
	tagline?: React.ReactNode
	/**
	 * Optional layout ID for the tagline for framer-motion animations
	 * @example <SectionHeader taglineLayoutId="author-name" />
	 */
	taglineLayoutId?: string
	/**
	 * Optional link to take the user back a page, if not provided the back link won't show
	 * @example <SectionHeader backLink="/categories" />
	 */
	backLink?: string
	/**
	 * Optional right content
	 * @example <SectionHeader rightContent={<CustomContent />} />
	 */
	rightContent?: React.ReactNode
}

export const SectionHeader: React.VFC<SectionHeaderProps> = (props) => {
	const { title, titleLayoutId, tagline, taglineLayoutId, backLink, rightContent } = props

	return (
		<SectionHeaderWrapper>
			<div className="flex flex-row">
				<div className="flex-1 hidden md:flex">
					<BouncingLink direction="left" link={backLink} />
				</div>
				<SectionTitle layoutId={titleLayoutId} title={title} />
				<div className="flex-1 hidden md:flex justify-end">{rightContent}</div>
			</div>
			{tagline && (
				<motion.p layoutId={taglineLayoutId} className="text-xl text-gray-500">
					{tagline}
				</motion.p>
			)}
		</SectionHeaderWrapper>
	)
}
