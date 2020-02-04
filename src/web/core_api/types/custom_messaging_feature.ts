// This file is automatically generated based on the Looker Core API metadata.

export interface CustomMessagingFeature {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  id: string
  name: string | null
  description: string | null
  type: string | null
  value: string | null
}

export interface RequestCustomMessagingFeature {
  value?: string | null
}