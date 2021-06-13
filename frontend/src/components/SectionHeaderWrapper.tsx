export const SectionHeaderWrapper: React.VFC<{ children: React.ReactNode }> = (props) => {
	const { children } = props
	return (
		<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-4xl xl:max-w-5xl pb-6 md:pb-12">
			{children}
		</div>
	)
}
