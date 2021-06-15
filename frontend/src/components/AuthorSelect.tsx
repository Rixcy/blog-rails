import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import clsx from 'clsx'
import type { Author } from '../types/Author'

export type AuthorSelectProps = {
  /**
   * A list of author objects which are used to show avatars and names in the select
   */
  authors: Author[]
  /**
   * An optional onChange callback to access the new value programmatically
   * @example <AuthorSelect onChange={(author) => console.log({ author })} />
   */
  onChange?: (author: Author) => void
  /**
   * An optional author ID to be used to set the default selection of the select
   * @example <AuthorSelect initialAuthorId={1} />
   */
  initialAuthorId?: number
}

export const AuthorSelect: React.VFC<AuthorSelectProps> = (props) => {
  const { authors, onChange, initialAuthorId } = props

  const initialAuthor = initialAuthorId
    ? authors.find((a) => a.id === initialAuthorId)
    : null

  const [selected, setSelected] = useState<Author>(initialAuthor || authors[0])

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value)
        onChange?.(value)
      }}
    >
      {({ open }) => (
        <div className="mb-4" data-testid="author-select">
          <Listbox.Label className="block text-sm font-medium text-gray-700 text-left">
            Author
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selected.avatar_url}
                  alt={`${selected.name}'s avatar`}
                  className="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
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
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {authors.map((author) => (
                  <Listbox.Option
                    key={author.id}
                    className={({ active }) =>
                      clsx(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={author}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={author.avatar_url}
                            alt={`${author.name}'s avatar`}
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          <span
                            className={clsx(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate'
                            )}
                          >
                            {author.name}
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
