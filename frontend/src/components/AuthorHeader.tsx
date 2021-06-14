import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import NextLink from 'next/link'
import { SectionHeader } from './SectionHeader'
import type { Author } from '../types/Author'

export type AuthorHeaderProps = {
	author: Author
}

export const AuthorHeader: React.VFC<AuthorHeaderProps> = (props) => {
	const { author } = props

	return (
		<>
			<img
				className="inline-block h-16 w-16 rounded-full mb-4 bg-gray-200"
				src={author.avatar_url}
				alt={`${author.name}'s avatar`}
			/>
			<SectionHeader
				title={author.name}
				tagline={author.tagline}
				rightContent={
					<NextLink href="/articles" passHref>
						<a className="flex flex-row items-center group transition text-sm text-gray-800">
							<p>Articles</p>
							<ArrowNarrowRightIcon className="ml-2 w-6 h-5 opacity-0 group-hover:opacity-100 animate-bounce-x" />
						</a>
					</NextLink>
				}
			/>
		</>
	)
}
