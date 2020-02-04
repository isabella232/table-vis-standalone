// This file is automatically generated based on the Looker Core API metadata.

export interface IntegrationHub {
  /** Operations the current user is able to perform on this object */
  can: {[key: string]: boolean}
  /** ID of the hub. */
  id: number
  /** URL of the hub. */
  url: string
  /** Label of the hub. */
  label: string
  /** Whether this hub is a first-party integration hub operated by Looker. */
  official: boolean
  /** An error message, present if the integration hub metadata could not be fetched. If this is present, the integration hub is unusable. */
  fetch_error_message: string | null
  /** Whether the authorization_token is set for the hub. */
  has_authorization_token: boolean
  /** Whether the legal agreement message has been signed by the user. This only matters if legal_agreement_required is true. */
  legal_agreement_signed: boolean
  /** Whether the legal terms for the integration hub are required before use. */
  legal_agreement_required: boolean
  /** The legal agreement text for this integration hub. */
  legal_agreement_text: string | null
}

export interface RequestIntegrationHub {
  /** URL of the hub. */
  url?: string
  /** (Write-Only) An authorization key that will be sent to the integration hub on every request. */
  authorization_token?: string | null
}