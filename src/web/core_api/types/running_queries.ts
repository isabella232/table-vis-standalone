// This file is automatically generated based on the Looker Core API metadata.

import { LookBasic } from './look_basic'
import { Query } from './query'
import { SqlQuery } from './sql_query'
import { UserPublic } from './user_public'

export interface RunningQueries {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Unique Id */
  id: number
  /** User who initiated the query */
  user: UserPublic | null
  /** Query that was run */
  query: Query | null
  /** SQL Query that was run */
  sql_query: SqlQuery | null
  /** Look of query that was run */
  look: LookBasic | null
  /** Date/Time Query was initiated */
  created_at: string | null
  /** Date/Time Query was completed */
  completed_at: string | null
  /** Query Id */
  query_id: string | null
  /** Source (look, dashboard, queryrunner, explore, etc.) */
  source: string | null
  /** Node Id */
  node_id: string | null
  /** Slug */
  slug: string | null
  /** ID of a Query Task */
  query_task_id: string | null
  /** Cache Key */
  cache_key: string | null
  /** Connection */
  connection_name: string | null
  /** Dialect */
  dialect: string | null
  /** Connection ID */
  connection_id: string | null
  /** Additional Information(Error message or verbose status) */
  message: string | null
  /** Status description */
  status: string | null
  /** Number of seconds elapsed running the Query */
  runtime: number | null
  /** SQL text of the query as run */
  sql: string | null
}

export interface RequestRunningQueries {

}