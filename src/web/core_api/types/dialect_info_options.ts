// This file is automatically generated based on the Looker Core API metadata.

export interface DialectInfoOptions {
  /** Has additional params support */
  additional_params: boolean
  /** Has auth support */
  auth: boolean
  /** Has host support */
  host: boolean
  /** Has support for a service account */
  oauth_credentials: boolean
  /** Has project name support */
  project_name: boolean
  /** Has schema support */
  schema: boolean
  /** Has SSL support */
  ssl: boolean
  /** Has timezone support */
  timezone: boolean
  /** Has tmp table support */
  tmp_table: boolean
  /** Username is required */
  username_required: boolean
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
}

export interface RequestDialectInfoOptions {

}
