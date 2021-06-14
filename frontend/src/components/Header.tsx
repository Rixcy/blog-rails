import { Popover } from '@headlessui/react'
import { HeaderMobileMenuButton } from './HeaderMobileMenuButton'
import { HeaderDesktopMenu } from './HeaderDesktopMenu'
import { HeaderMobileMenu } from './HeaderMobileMenu'

export const Header = () => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center md:border-b-2 border-gray-100 justify-end md:justify-center pb-6 md:space-x-10 mr-[20px] md:pr-0 pt-[36px] md:pt-6">
              <HeaderMobileMenuButton />
              <HeaderDesktopMenu />
            </div>
          </div>

          <HeaderMobileMenu open={open} />
        </>
      )}
    </Popover>
  )
}
