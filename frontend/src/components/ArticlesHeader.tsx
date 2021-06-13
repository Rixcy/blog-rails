import NextLink from 'next/link'
import { SectionHeader } from './SectionHeader'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid'

export const ArticlesHeader: React.VFC = () => {
	return (
		<SectionHeader
			title="Articles"
			tagline="View the most recent articles right here in your browser!"
			rightContent={
				<NextLink href="/categories" passHref>
					<a className="flex flex-row items-center group transition text-sm text-gray-800">
						<p>Categories</p>
						<ArrowNarrowRightIcon className="ml-2 w-6 h-5 opacity-0 group-hover:opacity-100 animate-bounce-x" />
					</a>
				</NextLink>
			}
		/>
	)
}
