import { ResourceStats, ResourcesIntro } from '@sections'

export const metadata = {
  title: 'Resources',
  description: 'Tools, guides and reading picked by the FutureTech team.',
}

export default function ResourcesPage() {
  return (
    <>
      <ResourcesIntro />
      <ResourceStats />
    </>
  )
}
