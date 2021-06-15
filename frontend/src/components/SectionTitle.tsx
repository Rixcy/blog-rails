import { motion } from 'framer-motion'

export type SectionTitleProps = {
  /**
   * Title for the section
   * @example <SectionTitle title="Articles" />
   */
  title: string
  /**
   * Optional layout id to be used for framer motion animations
   * @example <SectionTitle layoutId={`article-title-${article.id}`} />
   */
  layoutId?: string
}

export const SectionTitle: React.VFC<SectionTitleProps> = (props) => {
  const { title, layoutId } = props
  return (
    <motion.h1
      layoutId={layoutId}
      className="text-3xl font-extrabold tracking-tight sm:text-4xl flex-1 md:flex-auto"
    >
      {title}
    </motion.h1>
  )
}
