// This file is automatically generated based on the Looker Core API metadata.

import { LookWithQuery } from './look_with_query'
import { Query } from './query'
import { RequestResultMakerWithIdVisConfigAndDynamicFields, ResultMakerWithIdVisConfigAndDynamicFields } from './result_maker_with_id_vis_config_and_dynamic_fields'

export interface DashboardElement {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Text tile body text */
  body_text: string | null
  /** Text tile body text as Html */
  body_text_as_html: string | null
  /** Id of Dashboard */
  dashboard_id: string | null
  /** Relative path of URI of LookML file to edit the dashboard element (LookML dashboard only). */
  edit_uri: string | null
  /** Unique Id */
  id: string
  /** Look */
  look: LookWithQuery | null
  /** Id Of Look */
  look_id: string | null
  /** LookML link ID */
  lookml_link_id: string | null
  /** ID of merge result */
  merge_result_id: string | null
  /** Note Display */
  note_display: string | null
  /** Note State */
  note_state: string | null
  /** Note Text */
  note_text: string | null
  /** Note Text as Html */
  note_text_as_html: string | null
  /** Query */
  query: Query | null
  /** Id Of Query */
  query_id: number | null
  /** Refresh Interval */
  refresh_interval: string | null
  /** Refresh Interval as integer */
  refresh_interval_to_i: number | null
  /** Data about the result maker. */
  result_maker: ResultMakerWithIdVisConfigAndDynamicFields | null
  /** ID of the ResultMakerLookup entry. */
  result_maker_id: number | null
  /** Text tile subtitle text */
  subtitle_text: string | null
  /** Title of dashboard element */
  title: string | null
  /** Whether title is hidden */
  title_hidden: boolean
  /** Text tile title */
  title_text: string | null
  /** Type */
  type: string | null
  /** Count of Alerts associated to a dashboard element */
  alert_count: number | null
}

export interface RequestDashboardElement {
  /** Text tile body text */
  body_text?: string | null
  /** Id of Dashboard */
  dashboard_id?: string | null
  /** Id Of Look */
  look_id?: string | null
  /** ID of merge result */
  merge_result_id?: string | null
  /** Note Display */
  note_display?: string | null
  /** Note State */
  note_state?: string | null
  /** Note Text */
  note_text?: string | null
  /** Id Of Query */
  query_id?: number | null
  /** Refresh Interval */
  refresh_interval?: string | null
  /** Data about the result maker. */
  result_maker?: RequestResultMakerWithIdVisConfigAndDynamicFields | null
  /** Text tile subtitle text */
  subtitle_text?: string | null
  /** Title of dashboard element */
  title?: string | null
  /** Whether title is hidden */
  title_hidden?: boolean
  /** Text tile title */
  title_text?: string | null
  /** Type */
  type?: string | null
}