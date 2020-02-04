// This file is automatically generated based on the Looker Core API metadata.

export interface GitConnectionTestResult {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** A short string, uniquely naming this test */
  id: string
  /** Additional data from the test */
  message: string | null
  /** Either 'pass' or 'fail' */
  status: string | null
}

export interface RequestGitConnectionTestResult {

}