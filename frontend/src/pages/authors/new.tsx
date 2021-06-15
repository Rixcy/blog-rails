import { NewAuthorHeader } from '../../components/NewAuthorHeader'
import { PageContainer } from '../../components/PageContainer'
import { NewAuthorForm } from '../../components/NewAuthorForm'
import { Meta } from '../../components/Meta'

export default function NewAuthorPage() {
  return (
    <PageContainer>
      <Meta title="New Author" />
      <NewAuthorHeader />
      <NewAuthorForm />
    </PageContainer>
  )
}
