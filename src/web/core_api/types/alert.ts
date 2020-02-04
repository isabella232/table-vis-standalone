// This file is automatically generated based on the Looker Core API metadata.

import { AlertAppliedDashboardFilter, RequestAlertAppliedDashboardFilter } from './alert_applied_dashboard_filter'
import { AlertField, RequestAlertField } from './alert_field'
import { AlertNotification, RequestAlertNotification } from './alert_notification'
import { AlertThreshold, RequestAlertThreshold } from './alert_threshold'
import { UserPublic } from './user_public'

export enum AlertType {
  EQUALTO = 'EQUAL_TO',
  GREATERTHAN = 'GREATER_THAN',
  GREATERTHANOREQUALTO = 'GREATER_THAN_OR_EQUAL_TO',
  LESSTHAN = 'LESS_THAN',
  LESSTHANOREQUALTO = 'LESS_THAN_OR_EQUAL_TO',
  INCREASESBY = 'INCREASES_BY',
  DECREASESBY = 'DECREASES_BY',
  CHANGESBY = 'CHANGES_BY'
}

export interface Alert {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** ID of the alert */
  id: number
  /** User who created this alert */
  user: UserPublic
  /** ID of the owner */
  user_id: number
  /** ID of the query */
  query_id: number
  /** Whether or not the alert is followable */
  followable: boolean | null
  /** Whether or not the alert should be public if it is followable */
  allow_following_preference: boolean | null
  /** ID of the dashboard element associated with the alert */
  dashboard_element_id: number | null
  /** ID of the LookML dashboard associated with the alert */
  lookml_dashboard_id: string | null
  /** ID of the LookML dashboard element associated with the alert */
  lookml_link_id: string | null
  /** Human-readable description for the alert */
  notification: AlertNotification
  /** Array of email addresses that will be notified of the alert conditions are met */
  emails: string[]
  /** This property informs the check what kind of comparison we are performing - less_than, changes_by, etc. Valid values are: "EQUAL_TO", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "INCREASES_BY", "DECREASES_BY", "CHANGES_BY". */
  type: AlertType
  /** The field the alert condition is applied to */
  field: AlertField
  /** Threshold of the alert */
  threshold: AlertThreshold
  /** Whether or not the user follows this alert. */
  alert_followed: boolean | null
  /** The reason this alert is disabled */
  disabled_reason: string | null
  /** The date this alert was disabled */
  disabled_date: string | null
  /** An optional, user-defined title for the alert */
  custom_title: string | null
  /** Filters applied to the original query */
  applied_dashboard_filters: AlertAppliedDashboardFilter[] | null
}

export interface RequestAlert {
  /** ID of the alert */
  id?: number
  /** ID of the owner */
  user_id?: number
  /** ID of the query */
  query_id?: number
  /** Whether or not the alert should be public if it is followable */
  allow_following_preference?: boolean | null
  /** ID of the dashboard element associated with the alert */
  dashboard_element_id?: number | null
  /** ID of the LookML dashboard associated with the alert */
  lookml_dashboard_id?: string | null
  /** ID of the LookML dashboard element associated with the alert */
  lookml_link_id?: string | null
  /** Human-readable description for the alert */
  notification?: RequestAlertNotification
  /** Array of email addresses that will be notified of the alert conditions are met */
  emails?: string[]
  /** This property informs the check what kind of comparison we are performing - less_than, changes_by, etc. Valid values are: "EQUAL_TO", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "INCREASES_BY", "DECREASES_BY", "CHANGES_BY". */
  type?: AlertType
  /** The field the alert condition is applied to */
  field?: RequestAlertField
  /** Threshold of the alert */
  threshold?: RequestAlertThreshold
  /** The reason this alert is disabled */
  disabled_reason?: string | null
  /** The date this alert was disabled */
  disabled_date?: string | null
  /** An optional, user-defined title for the alert */
  custom_title?: string | null
  /** Filters applied to the original query */
  applied_dashboard_filters?: RequestAlertAppliedDashboardFilter[] | null
}