import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import clsx from 'clsx'
import type { Category } from '../types/Category'

const colourClasses = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
}

export type CategorySelectProps = {
  /**
   * A list of category objects which are used to show avatars and names in the select
   */
  categories: Category[]
  /**
   * An optional onChange callback to access the new value programmatically
   * @example <CategorySelect onChange={(category) => console.log({ category })} />
   */
  onChange?: (category: Category) => void
  /**
   * An optional category ID to be used to set the default selection of the select
   * @example <CategorySelect initialCategoryId={1} />
   */
  initialCategoryId?: number
}

export const CategorySelect: React.VFC<CategorySelectProps> = (props) => {
  const { onChange, categories, initialCategoryId } = props

  const initialCategory = initialCategoryId
    ? categories.find((c) => c.id === initialCategoryId)
    : null

  const [selected, setSelected] = useState<Category>(
    initialCategory || categories[0]
  )

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value)
        onChange?.(value)
      }}
    >
      {({ open }) => (
        <div className="mb-4" data-testid="category-select">
          <Listbox.Label className="block text-sm font-medium text-gray-700 text-left">
            Category
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <div className="flex items-center">
                <ColourCircle category={selected.colour} />
                <span className="ml-3 block truncate">{selected.title}</span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {categories.map((category, index) => (
                  <Listbox.Option
                    key={`category-${index}`}
                    className={({ active }) =>
                      clsx(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <ColourCircle category={category.colour} />
                          <span
                            className={clsx(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {category.title}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  )
}

const ColourCircle: React.VFC<{ category: string }> = ({ category }) => (
  <span
    className={clsx(
      'flex-shrink-0 inline-block h-2 w-2 rounded-full',
      colourClasses[category]
    )}
    aria-hidden="true"
  />
)
