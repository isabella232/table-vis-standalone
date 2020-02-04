// This file is automatically generated based on the Looker Core API metadata.

import { DashboardBase } from './dashboard_base'
import { LookBasic } from './look_basic'

export interface ContentFavorite {
  /** Unique Id */
  id: number
  /** User Id which owns this ContentFavorite */
  user_id: number
  /** Content Metadata Id associated with this ContentFavorite */
  content_metadata_id: number
  /** Id of a look */
  look_id: number | null
  /** Id of a dashboard */
  dashboard_id: number | null
  /** Associated Look */
  look: LookBasic | null
  /** Associated Dashboard */
  dashboard: DashboardBase | null
}

export interface RequestContentFavorite {
  /** User Id which owns this ContentFavorite */
  user_id?: number
  /** Content Metadata Id associated with this ContentFavorite */
  content_metadata_id?: number
}