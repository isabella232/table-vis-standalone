// This file is automatically generated based on the Looker Core API metadata.

import { Dialect } from './dialect'
import { Snippet } from './snippet'

export interface DBConnectionBase {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Name of the connection. Also used as the unique identifier */
  name: string
  /** (Read-only) SQL Dialect details */
  dialect: Dialect
  /** SQL Runner snippets for this connection */
  snippets: Snippet[]
}

export interface RequestDBConnectionBase {

}
