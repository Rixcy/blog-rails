export type PageContainerProps = {
	children: React.ReactNode
}

export const PageContainer: React.VFC<PageContainerProps> = (props) => {
	const { children } = props
	return (
		<div className="min-h-screen">
			<div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
				{children}
			</div>
		</div>
	)
}
