// This file is automatically generated based on the Looker Core API metadata.

export enum ContentMetaGroupUserPermissionType {
  View = 'view',
  Edit = 'edit'
}

export interface ContentMetaGroupUser {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** Unique Id */
  id: string
  /** Id of associated Content Metadata */
  content_metadata_id: string | null
  /** Type of permission: "view" or "edit" Valid values are: "view", "edit". */
  permission_type: ContentMetaGroupUserPermissionType | null
  /** ID of associated group */
  group_id: number | null
  /** ID of associated user */
  user_id: number | null
}

export interface RequestContentMetaGroupUser {

}