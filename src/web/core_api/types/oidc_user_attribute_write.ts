// This file is automatically generated based on the Looker Core API metadata.

export interface OIDCUserAttributeWrite {
  /** Name of User Attribute in OIDC */
  name: string | null
  /** Required to be in OIDC assertion for login to be allowed to succeed */
  required: boolean
  /** Looker User Attribute Ids */
  user_attribute_ids: number[] | null
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
}

export interface RequestOIDCUserAttributeWrite {
  /** Name of User Attribute in OIDC */
  name?: string | null
  /** Required to be in OIDC assertion for login to be allowed to succeed */
  required?: boolean
  /** Looker User Attribute Ids */
  user_attribute_ids?: number[] | null
}