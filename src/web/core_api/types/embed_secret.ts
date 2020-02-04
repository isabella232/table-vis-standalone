// This file is automatically generated based on the Looker Core API metadata.

export interface EmbedSecret {
  /** Signing algorithm to use with this secret */
  algorithm: string | null
  /** When secret was created */
  created_at: string | null
  /** Is this secret currently enabled */
  enabled: boolean
  /** Unique Id */
  id: number
  /** Secret for use with SSO embedding */
  secret: string | null
  /** Id of user who created this secret */
  user_id: number | null
}

export interface RequestEmbedSecret {
  /** Signing algorithm to use with this secret */
  algorithm?: string | null
  /** Is this secret currently enabled */
  enabled?: boolean
}