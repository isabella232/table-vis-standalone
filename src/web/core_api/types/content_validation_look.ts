// This file is automatically generated based on the Looker Core API metadata.

import { ContentValidationFolder } from './content_validation_folder'
import { ContentValidationSpace } from './content_validation_space'

export interface ContentValidationLook {
  /** Unique Id */
  id: number
  /** Look Title */
  title: string | null
  /** Space of this Look */
  space: ContentValidationSpace | null
  /** Folder of this Look */
  folder: ContentValidationFolder | null
}

export interface RequestContentValidationLook {
  /** Look Title */
  title?: string | null
}