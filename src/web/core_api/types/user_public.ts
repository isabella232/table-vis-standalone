// This file is automatically generated based on the Looker Core API metadata.

export interface UserPublic {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Unique Id */
  id: number
  /** First Name */
  first_name: string
  /** Last Name */
  last_name: string
  /** Full name for display (available only if both first_name and last_name are set) */
  display_name: string | null
  /** URL for the avatar image (may be generic) */
  avatar_url: string
  /** Link to get this item */
  url: string | null
}

export interface RequestUserPublic {

}