import { Popover } from '@headlessui/react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import clsx from 'clsx'
import { HeaderCreateDropdown } from './HeaderCreateDropdown'
import { focusClasses } from '../styles/focus-classes'

export const HeaderDesktopMenu: React.VFC = () => {
  return (
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      <DesktopLink link="/articles">Articles</DesktopLink>
      <DesktopLink link="/categories">Categories</DesktopLink>
      <DesktopLink link="/authors">Authors</DesktopLink>

      <HeaderCreateDropdown />
    </Popover.Group>
  )
}

type DesktopLinkProps = {
  link: string
  children: React.ReactNode
}

const DesktopLink: React.VFC<DesktopLinkProps> = (props) => {
  const { children, link } = props

  const router = useRouter()

  const isActive = router.pathname === link

  return (
    <NextLink href={link} passHref>
      <a
        tabIndex={0}
        className={clsx(
          'text-base font-medium hover:text-gray-900',
          focusClasses,
          {
            'text-gray-900': isActive,
            'text-gray-500': !isActive,
          }
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
