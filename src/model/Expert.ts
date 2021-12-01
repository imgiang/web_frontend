export default interface Expert {
    _id: string
    _index: string
    _source: Source
  }
  
  export interface Source {
    thumbnail: string
    types: string[]
    address: Address
    indexed: number
    google_scholar_fields: GoogleScholarFields
    source: string
    title: string
    source_url: string
    created_datetime: string
    crawl_by_background_job: boolean
    job_id: string
    name: string
    source_id: string
    id: string
    contacts: Contact[]
  }
  
  export interface Address {
    displayed: string
  }
  
  export interface Contact {
    type: string
    value: string
  }
  
  export interface GoogleScholarFields {
    home_page: string
    citations: number
    h_index: number
    i10index: number
    affiliate: string
    fields: string[]
    research: string[]
  }