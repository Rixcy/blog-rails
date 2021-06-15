import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { forwardRef } from 'react'
import clsx from 'clsx'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'name'
> & {
  /**
   * The name of the input field, this is used to attach the label
   * @example <Input name="email" />
   */
  name: string
  /**
   * A label for the input
   * @example <Input label="Your Email" />
   */
  label: string
  /**
   * HTML props to pass through to the label element
   * @example <Input labelProps={{ className="mb-2" }} />
   */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>
  /**
   * Error message to display under the input, if passed this will also highlight the input red to show there's an error
   * @example <Input errorMessage="Please enter a valid email address" />
   */
  errorMessage?: string
}

export const Input: React.VFC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>((props, ref) => {
  const {
    name,
    label,
    labelProps,
    errorMessage,
    type,
    className,
    ...inputProps
  } = props

  const { className: labelClassName, ...restLabelProps } = labelProps || {}

  return (
    <div className="mb-4 flex flex-col">
      <label
        htmlFor={name}
        className={clsx(
          'block text-sm font-medium text-gray-700 text-left',
          labelClassName
        )}
        {...restLabelProps}
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          ref={ref}
          name={name}
          type={type || 'text'}
          className={clsx(
            'block w-full sm:text-sm rounded-md',
            {
              'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500':
                !errorMessage,
              'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500':
                !!errorMessage,
            },
            className
          )}
          aria-invalid={!!errorMessage}
          aria-describedby={errorMessage ? `${name}-field-error` : undefined}
          {...inputProps}
        />
        {errorMessage && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {errorMessage && (
        <p
          className="mt-2 text-sm text-red-600 text-left"
          id={`${name}-field-error`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
})
