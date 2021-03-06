// This file is automatically generated based on the Looker Core API metadata.

export interface UserAttributeWithValue {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Name of user attribute */
  name: string | null
  /** Human-friendly label for user attribute */
  label: string | null
  /** Precedence for setting value on user (lowest wins) */
  rank: number | null
  /** Value of attribute for user */
  value: string | null
  /** Id of User */
  user_id: number | null
  /** Can the user set this value */
  user_can_edit: boolean
  /** If true, the "value" field will be null, because the attribute settings block access to this value */
  value_is_hidden: boolean
  /** Id of User Attribute */
  user_attribute_id: number | null
  /** How user got this value for this attribute */
  source: string | null
  /** If this user attribute is hidden, whitelist of destinations to which it may be sent. */
  hidden_value_domain_whitelist: string | null
}

export interface RequestUserAttributeWithValue {
  /** Value of attribute for user */
  value?: string | null
}
