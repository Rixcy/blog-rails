import { motion } from 'framer-motion'

export const SectionTitle: React.VFC<{ title: string; layoutId?: string }> = (props) => {
	const { title, layoutId } = props
	return (
		<motion.h2
			layoutId={layoutId}
			className="text-3xl font-extrabold tracking-tight sm:text-4xl flex-1 md:flex-auto"
		>
			{title}
		</motion.h2>
	)
}
