import { contentfulClient } from './contentful'

import type { Document } from '@contentful/rich-text-types'

interface TagsType {
  tag: string
}

export interface TipsType {
  title: string,
  slug: string,
  content: Document,
  created: Date,
  tags: TagsType[]
}

export const tips = await contentfulClient.getEntries<TipsType>({
  content_type: "studioAlexTips"
})
