export interface Profile {
    id: string
    name: string
    avatar?: string
    description: string
    profession?: string
    email?: string
    phone?: string
    website?: string
    interests?: string[]
    joinDate?: string
    location: {
      street?: string
      city: string
      country: string
      postalCode?: string
      coordinates: {
        longitude: number
        latitude: number
      }
    }
  }
  
  