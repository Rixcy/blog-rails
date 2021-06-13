import { Article } from '../types/Article'
import { motion } from 'framer-motion'

export const ArticleBody: React.VFC<{ article: Article }> = (props) => {
	const {
		article: { id, body },
	} = props
	return (
		<motion.p layoutId={`article-body-${id}`} className="mx-auto prose lg:prose-xl">
			{body}
		</motion.p>
	)
}
