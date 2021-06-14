import { Popover, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'
import { focusClasses } from '../styles/focus-classes'

export type HeaderMobileMenuProps = {
  open: boolean
}

export const HeaderMobileMenu: React.VFC<HeaderMobileMenuProps> = (props) => {
  const { open } = props
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        static
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 flex flex-row items-start justify-between">
            <div className="space-y-6 w-full">
              <div className="grid grid-cols-1 gap-y-4 gap-x-8">
                <MobileLink link="/articles">Articles</MobileLink>
                <MobileLink link="/categories">Categories</MobileLink>
                <MobileLink link="/authors">Authors</MobileLink>
              </div>
            </div>
            <div className="flex items-center justify-between mr-2">
              <div className="-mr-2">
                <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 pt-5 pb-6">
            <p className="mx-5 pb-4 mb-4 border-b border-gray-200">Create</p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mx-5 text-sm">
              <MobileLink link="/articles/new">New Article</MobileLink>
              <MobileLink link="/categories/new">New Category</MobileLink>
              <MobileLink link="/authors/new">New Author</MobileLink>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

type MobileLinkProps = {
  link: string
  children: React.ReactNode
}

const MobileLink: React.VFC<MobileLinkProps> = (props) => {
  const { children, link } = props
  return (
    <NextLink href={link} passHref>
      <a
        className={clsx(
          'font-medium text-gray-900 hover:text-gray-700',
          focusClasses
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
