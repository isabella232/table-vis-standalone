// This file is automatically generated based on the Looker Core API metadata.

import { MarketplaceListing } from './marketplace_listing'

export interface MarketplaceCollection {
  /** Unique ID of the collection */
  id: string
  /** Human-readable label for the collection */
  label: string
  /** Human-readable description for the collection */
  description: string
  /** An array of the marketplace listings this collection contains. */
  listings: MarketplaceListing[]
}

export interface RequestMarketplaceCollection {

}