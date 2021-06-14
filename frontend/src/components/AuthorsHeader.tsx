import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import NextLink from 'next/link'
import { SectionHeader } from './SectionHeader'

export const AuthorsHeader: React.VFC = () => {
	return (
		<SectionHeader
			title="Authors"
			tagline="View established authors right here in your browser!"
			rightContent={
				<NextLink href="/articles" passHref>
					<a className="flex flex-row items-center group transition text-sm text-gray-800">
						<p>Articles</p>
						<ArrowNarrowRightIcon className="ml-2 w-6 h-5 opacity-0 group-hover:opacity-100 animate-bounce-x" />
					</a>
				</NextLink>
			}
		/>
	)
}
