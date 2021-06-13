import clsx from 'clsx'
import type { Colour } from '../types/Colour'
import NextLink from 'next/link'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'

export type SectionHeaderProps = {
	/**
	 * Title for the section
	 * @example <SectionHeader title="Categories" />
	 */
	title: string
	/**
	 * Optional text to show below the section title
	 * @example <SectionHeader tagline="Excepteur sint occaecat cupidatat" />
	 */
	tagline?: string
	/**
	 * Optional link to take the user back a page, if not provided the back link won't show
	 * @example <SectionHeader backLink="/categories" />
	 */
	backLink?: string
}

export const SectionHeader: React.VFC<SectionHeaderProps> = (props) => {
	const { title, tagline, backLink } = props

	return (
		<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-3xl pb-6 md:pb-12">
			<div className="flex flex-row">
				<div className="flex-1 flex">
					{backLink && (
						<NextLink href={backLink} passHref>
							<a className="flex flex-row items-center group transition text-sm text-gray-800">
								<ArrowNarrowLeftIcon className="w-6 h-5 pr-1 opacity-0 group-hover:opacity-100 animate-bounce-x" />
								<p>Back</p>
							</a>
						</NextLink>
					)}
				</div>
				<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
				<div className="flex-1" />
			</div>
			{tagline && <p className="text-xl text-gray-500">{tagline}</p>}
		</div>
	)
}
