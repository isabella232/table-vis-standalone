// This file is automatically generated based on the Looker Core API metadata.

export interface DBConnectionOverride {
  /** Context in which to override (`pdt` is the only allowed value) */
  context: string
  /** Host name/address of server */
  host: string | null
  /** Port number on server */
  port: string | null
  /** Username for server authentication */
  username: string | null
  /** Whether or not the password is overridden in this context */
  has_password: boolean
  /** Database name */
  database: string | null
  /** Scheme name */
  schema: string | null
  /** Additional params to add to JDBC connection string */
  jdbc_additional_params: string | null
  /** SQL statements (semicolon separated) to issue after connecting to the database. Requires `custom_after_connect_statements` license feature */
  after_connect_statements: string | null
}

export interface RequestDBConnectionOverride {
  /** Context in which to override (`pdt` is the only allowed value) */
  context?: string
  /** Host name/address of server */
  host?: string | null
  /** Port number on server */
  port?: string | null
  /** Username for server authentication */
  username?: string | null
  /** (Write-Only) Password for server authentication */
  password?: string | null
  /** (Write-Only) Base64 encoded Certificate body for server authentication (when appropriate for dialect). */
  certificate?: string | null
  /** (Write-Only) Certificate keyfile type - .json or .p12 */
  file_type?: string | null
  /** Database name */
  database?: string | null
  /** Scheme name */
  schema?: string | null
  /** Additional params to add to JDBC connection string */
  jdbc_additional_params?: string | null
  /** SQL statements (semicolon separated) to issue after connecting to the database. Requires `custom_after_connect_statements` license feature */
  after_connect_statements?: string | null
}