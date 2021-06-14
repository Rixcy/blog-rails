import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import NextLink from 'next/link'

export type BouncingLinkProps = {
	link?: string
	linkText?: string
	direction: 'left' | 'right'
}

export const BouncingLink: React.VFC<BouncingLinkProps> = (props): React.ReactElement | null => {
	const { link, linkText, direction } = props

	const LeftArrow = () => (
		<ArrowNarrowLeftIcon className="w-6 h-5 mr-1 opacity-0 group-hover:opacity-100 animate-bounce-x" />
	)

	const RightArrow = () => (
		<ArrowNarrowRightIcon className="ml-2 w-6 h-5 opacity-0 group-hover:opacity-100 animate-bounce-x" />
	)

	return link ? (
		<NextLink href={link} passHref>
			<a className="flex flex-row items-center group transition text-sm text-gray-800">
				{direction === 'left' && <LeftArrow />}
				<p>{linkText || 'Back'}</p>
				{direction === 'right' && <RightArrow />}
			</a>
		</NextLink>
	) : null
}
