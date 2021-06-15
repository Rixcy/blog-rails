import clsx from 'clsx'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  size?: ButtonSize
  children: React.ReactNode
}

export const Button: React.VFC<ButtonProps> = (props) => {
  const { className, size = 'sm', type, children, ...buttonProps } = props

  const buttonSizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base',
  }

  return (
    <button
      type={type || 'button'}
      className={clsx(
        'inline-flex items-center border border-transparent leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        buttonSizes[size],
        className
      )}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
