// This file is automatically generated based on the Looker Core API metadata.

export interface LDAPConfigTestIssue {
  /** Severity of the issue. Error or Warning */
  severity: string | null
  /** Message describing the issue */
  message: string | null
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
}

export interface RequestLDAPConfigTestIssue {

}