// This file is automatically generated based on the Looker Core API metadata.

import { GitStatus } from './git_status'

export interface ProjectFile {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** An opaque token uniquely identifying a file within a project. Avoid parsing or decomposing the text of this token. This token is stable within a Looker release but may change between Looker releases */
  id: string
  /** Path, file name, and extension of the file relative to the project root directory */
  path: string | null
  /** Display name */
  title: string | null
  /** File type: model, view, etc */
  type: string | null
  /** The extension of the file: .view.lkml, .model.lkml, etc */
  extension: string | null
  /** File mime type */
  mime_type: string | null
  /** State of editability for the file. */
  editable: boolean
  /** Status of the file according to git */
  git_status: GitStatus | null
}

export interface RequestProjectFile {

}