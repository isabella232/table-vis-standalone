// This file is automatically generated based on the Looker Core API metadata.

export interface CustomWelcomeEmail {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** If true, custom email content will replace the default body of welcome emails */
  enabled: boolean
  /** The HTML to use as custom content for welcome emails. Script elements and other potentially dangerous markup will be removed. */
  content: string | null
}

export interface RequestCustomWelcomeEmail {
  /** If true, custom email content will replace the default body of welcome emails */
  enabled?: boolean
  /** The HTML to use as custom content for welcome emails. Script elements and other potentially dangerous markup will be removed. */
  content?: string | null
}