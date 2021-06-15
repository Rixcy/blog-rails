import { NewCategoryHeader } from '../../components/NewCategoryHeader'
import { NewCategoryForm } from '../../components/NewCategoryForm'
import { PageContainer } from '../../components/PageContainer'
import { Meta } from '../../components/Meta'

export default function NewCategoryPage() {
  return (
    <PageContainer>
      <Meta title="New Category" />
      <NewCategoryHeader />
      <NewCategoryForm />
    </PageContainer>
  )
}
