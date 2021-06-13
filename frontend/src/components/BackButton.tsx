import NextLink from 'next/link'
import { ArrowNarrowLeftIcon } from '@heroicons/react/solid'

export const BackButton: React.VFC<{ link?: string }> = ({ link }): React.ReactElement | null => {
	return link ? (
		<NextLink href={link} passHref>
			<a className="flex flex-row items-center group transition text-sm text-gray-800">
				<ArrowNarrowLeftIcon className="w-6 h-5 mr-1 opacity-0 group-hover:opacity-100 animate-bounce-x" />
				<p>Back</p>
			</a>
		</NextLink>
	) : null
}
