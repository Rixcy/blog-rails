import { Header } from './Header'

export type PageContainerProps = {
  children: React.ReactNode
}

export const PageContainer: React.VFC<PageContainerProps> = (props) => {
  const { children } = props
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto pb-12 md:pt-8 px-4 text-center sm:px-6 lg:px-8 lg:py-16">
        {children}
      </div>
    </div>
  )
}
