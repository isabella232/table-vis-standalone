// This file is automatically generated based on the Looker Core API metadata.

import { ImportedProject } from './imported_project'
import { LocalizationSettings } from './localization_settings'

export interface Manifest {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Manifest project name */
  name: string | null
  /** Imports for a project */
  imports: ImportedProject[] | null
  /** Localization settings for a project */
  localization_settings: LocalizationSettings | null
}

export interface RequestManifest {

}
