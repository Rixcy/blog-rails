export type SectionHeaderProps = {
	title: string
	tagline?: string
}

export const SectionHeader: React.VFC<SectionHeaderProps> = (props) => {
	const { title, tagline } = props
	return (
		<div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl mb-12">
			<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
			{tagline && <p className="text-xl text-gray-500">{tagline}</p>}
		</div>
	)
}
