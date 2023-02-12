import { contentfulClient } from './contentful'

interface TechnologyTech {
  name: string,
  svg: string
}

interface StudioAlex {
  title: string,
  copyright: string,
  technology: TechnologyTech[]
}

export const site = await contentfulClient.getEntry<StudioAlex>('2iSLbU02R0W3GSy9QKdXtW')
