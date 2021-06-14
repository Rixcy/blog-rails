import { MenuIcon } from '@heroicons/react/outline'
import { Popover } from '@headlessui/react'
import clsx from 'clsx'
import { focusClasses } from '../styles/focus-classes'

export const HeaderMobileMenuButton: React.VFC = () => {
  return (
    <div className="-mr-2 -my-2 md:hidden">
      <Popover.Button
        className={clsx(
          'bg-gray-100 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100',
          focusClasses
        )}
      >
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
    </div>
  )
}
