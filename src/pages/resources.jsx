import {
  ResourceCards,
  ResourceLibrary,
  ResourceStats,
  ResourcesIntro,
} from '@sections'
import { pages } from '@data'

export const metadata = pages.resources

export default function ResourcesPage() {
  return (
    <>
      <ResourcesIntro />
      <ResourceStats />
      <ResourceLibrary />
      <ResourceCards />
    </>
  )
}
