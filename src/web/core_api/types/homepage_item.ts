// This file is automatically generated based on the Looker Core API metadata.

export interface HomepageItem {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Name of user who created the content this item is based on */
  content_created_by: string | null
  /** Content favorite id associated with the item this content is based on */
  content_favorite_id: number | null
  /** Content metadata id associated with the item this content is based on */
  content_metadata_id: number | null
  /** Last time the content that this item is based on was updated */
  content_updated_at: string | null
  /** Custom description entered by the user, if present */
  custom_description: string | null
  /** Custom image_url entered by the user, if present */
  custom_image_url: string | null
  /** Custom title entered by the user, if present */
  custom_title: string | null
  /** Custom url entered by the user, if present */
  custom_url: string | null
  /** Dashboard to base this item on */
  dashboard_id: number | null
  /** The actual description for display */
  description: string | null
  /** Number of times content has been favorited, if present */
  favorite_count: number | null
  /** Associated Homepage Section */
  homepage_section_id: string | null
  /** Unique Id */
  id: string
  /** The actual image_url for display */
  image_url: string | null
  /** The container folder name of the content */
  location: string | null
  /** Look to base this item on */
  look_id: number | null
  /** LookML Dashboard to base this item on */
  lookml_dashboard_id: string | null
  /** An arbitrary integer representing the sort order within the section */
  order: number | null
  /** Number of seconds it took to fetch the section this item is in */
  section_fetch_time: number | null
  /** The actual title for display */
  title: string | null
  /** The actual url for display */
  url: string | null
  /** Whether the custom description should be used instead of the content description, if the item is associated with content */
  use_custom_description: boolean
  /** Whether the custom image should be used instead of the content image, if the item is associated with content */
  use_custom_image: boolean
  /** Whether the custom title should be used instead of the content title, if the item is associated with content */
  use_custom_title: boolean
  /** Whether the custom url should be used instead of the content url, if the item is associated with content */
  use_custom_url: boolean
  /** Number of times content has been viewed, if present */
  view_count: number | null
}

export interface RequestHomepageItem {
  /** Custom description entered by the user, if present */
  custom_description?: string | null
  /** (Write-Only) base64 encoded image data */
  custom_image_data_base64?: string | null
  /** Custom title entered by the user, if present */
  custom_title?: string | null
  /** Custom url entered by the user, if present */
  custom_url?: string | null
  /** Dashboard to base this item on */
  dashboard_id?: number | null
  /** Associated Homepage Section */
  homepage_section_id?: string | null
  /** Look to base this item on */
  look_id?: number | null
  /** LookML Dashboard to base this item on */
  lookml_dashboard_id?: string | null
  /** An arbitrary integer representing the sort order within the section */
  order?: number | null
  /** Whether the custom description should be used instead of the content description, if the item is associated with content */
  use_custom_description?: boolean
  /** Whether the custom image should be used instead of the content image, if the item is associated with content */
  use_custom_image?: boolean
  /** Whether the custom title should be used instead of the content title, if the item is associated with content */
  use_custom_title?: boolean
  /** Whether the custom url should be used instead of the content url, if the item is associated with content */
  use_custom_url?: boolean
}
