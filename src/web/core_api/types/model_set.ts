// This file is automatically generated based on the Looker Core API metadata.

export interface ModelSet {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  all_access: boolean
  built_in: boolean
  /** Unique Id */
  id: number
  models: string[] | null
  /** Name of ModelSet */
  name: string | null
  /** Link to get this item */
  url: string | null
}

export interface RequestModelSet {
  models?: string[] | null
  /** Name of ModelSet */
  name?: string | null
}