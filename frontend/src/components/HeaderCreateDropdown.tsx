import { Popover, Transition } from '@headlessui/react'
import { PlusCircleIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import NextLink from 'next/link'
import { Fragment } from 'react'
import clsx from 'clsx'
import { focusClasses } from '../styles/focus-classes'

const resources = [
  {
    name: 'New Article',
    href: '/articles/new',
    icon: PlusCircleIcon,
  },
  {
    name: 'New Category',
    href: '/categories/new',
    icon: PlusCircleIcon,
  },
  {
    name: 'New Author',
    href: '/authors/new',
    icon: PlusCircleIcon,
  },
]

export const HeaderCreateDropdown: React.VFC = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={clsx(
              open ? 'text-gray-900' : 'text-gray-500',
              'group inline-flex items-center text-base font-medium hover:text-gray-900',
              focusClasses
            )}
          >
            <span>Create</span>
            <ChevronDownIcon
              className={clsx(
                open ? 'text-gray-600' : 'text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-500'
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-[230px] sm:px-0"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  {resources.map((item) => (
                    <NextLink href={item.href} passHref key={item.name}>
                      <a
                        className={clsx(
                          '-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50',
                          focusClasses
                        )}
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-indigo-600"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    </NextLink>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
