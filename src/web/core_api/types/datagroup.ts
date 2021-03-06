// This file is automatically generated based on the Looker Core API metadata.

export interface Datagroup {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** UNIX timestamp at which this entry was created. */
  created_at: number | null
  /** Unique ID of the datagroup */
  id: string
  /** Name of the model containing the datagroup. Unique when combined with name. */
  model_name: string | null
  /** Name of the datagroup. Unique when combined with model_name. */
  name: string | null
  /** UNIX timestamp before which cache entries are considered stale. Cannot be in the future. */
  stale_before: number | null
  /** UNIX timestamp at which this entry trigger was last checked. */
  trigger_check_at: number | null
  /** The message returned with the error of the last trigger check. */
  trigger_error: string | null
  /** The value of the trigger when last checked. */
  trigger_value: string | null
  /** UNIX timestamp at which this entry became triggered. Cannot be in the future. */
  triggered_at: number | null
}

export interface RequestDatagroup {
  /** UNIX timestamp before which cache entries are considered stale. Cannot be in the future. */
  stale_before?: number | null
  /** UNIX timestamp at which this entry became triggered. Cannot be in the future. */
  triggered_at?: number | null
}
