import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import gfm from 'remark-gfm'
import type { Article } from '../types/Article'

export const ArticleBody: React.VFC<{ article: Article }> = (props) => {
  const {
    article: { id, body },
  } = props
  return (
    <motion.div layoutId={`article-body-${id}`}>
      <ReactMarkdown
        remarkPlugins={[gfm]}
        className="mx-auto prose lg:prose-xl"
        components={{ h1: 'h3' }}
        children={body}
      />
    </motion.div>
  )
}
