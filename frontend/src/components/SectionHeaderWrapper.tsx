export type SectionHeaderWrapperProps = {
  /**
   * React Node to be passed through as children, required
   * @example <SectionHeaderWrapper><div>content</div></SectionHeaderWrapper>
   */
  children: React.ReactNode
}

export const SectionHeaderWrapper: React.VFC<SectionHeaderWrapperProps> = (
  props
) => {
  const { children } = props
  return (
    <div className="space-y-5 sm:space-y-4 pb-6 md:pb-12 mx-8">{children}</div>
  )
}
