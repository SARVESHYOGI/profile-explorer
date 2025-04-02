"use client"

import { useState, useEffect } from "react"
import type { Profile } from "@/lib/types"

// Mock data for demonstration
const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "/placeholder.svg?height=200&width=200",
    description:
      "Software engineer with 10 years of experience in web development. Passionate about creating user-friendly interfaces and solving complex problems.",
    profession: "Software Engineer",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.example.com",
    interests: ["Coding", "Hiking", "Photography"],
    joinDate: "2020-01-15",
    location: {
      street: "123 Tech Street",
      city: "San Francisco",
      country: "USA",
      postalCode: "94105",
      coordinates: {
        longitude: -122.4194,
        latitude: 37.7749,
      },
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "/placeholder.svg?height=200&width=200",
    description:
      "Marketing specialist with expertise in digital campaigns and brand strategy. Helped numerous startups establish their market presence.",
    profession: "Marketing Specialist",
    email: "jane.smith@example.com",
    phone: "+1 (555) 987-6543",
    interests: ["Marketing", "Travel", "Yoga"],
    joinDate: "2019-08-22",
    location: {
      street: "456 Market Avenue",
      city: "New York",
      country: "USA",
      postalCode: "10001",
      coordinates: {
        longitude: -73.9857,
        latitude: 40.7484,
      },
    },
  },
  {
    id: "3",
    name: "Carlos Rodriguez",
    avatar: "/placeholder.svg?height=200&width=200",
    description:
      "Architect with a focus on sustainable design. Has worked on award-winning projects across Europe and South America.",
    profession: "Architect",
    email: "carlos@example.com",
    website: "https://carlos-architecture.example.com",
    interests: ["Architecture", "Sustainability", "Drawing"],
    joinDate: "2021-03-10",
    location: {
      street: "789 Design Boulevard",
      city: "Barcelona",
      country: "Spain",
      postalCode: "08001",
      coordinates: {
        longitude: 2.1734,
        latitude: 41.3851,
      },
    },
  },
  {
    id: "4",
    name: "Aisha Khan",
    avatar: "/placeholder.svg?height=200&width=200",
    description:
      "Medical researcher specializing in immunology. Currently working on breakthrough treatments for autoimmune diseases.",
    profession: "Medical Researcher",
    email: "aisha.khan@example.com",
    phone: "+44 20 1234 5678",
    interests: ["Medicine", "Research", "Reading"],
    joinDate: "2018-11-05",
    location: {
      street: "10 Science Park",
      city: "London",
      country: "UK",
      postalCode: "EC1V 4PW",
      coordinates: {
        longitude: -0.1278,
        latitude: 51.5074,
      },
    },
  },
  {
    id: "5",
    name: "Hiroshi Tanaka",
    avatar: "/placeholder.svg?height=200&width=200",
    description:
      "Game developer with a passion for creating immersive experiences. Has worked on several popular mobile and console games.",
    profession: "Game Developer",
    email: "hiroshi@example.com",
    website: "https://hiroshi-games.example.com",
    interests: ["Gaming", "Animation", "Music"],
    joinDate: "2020-06-18",
    location: {
      street: "5-2-1 Ginza",
      city: "Tokyo",
      country: "Japan",
      postalCode: "104-0061",
      coordinates: {
        longitude: 139.769,
        latitude: 35.6804,
      },
    },
  },
]

// In a real application, this would be replaced with actual API calls
const STORAGE_KEY = "profile-explorer-data"

// Helper to initialize local storage with mock data if empty
const initializeStorage = () => {
  if (typeof window === "undefined") return

  const existingData = localStorage.getItem(STORAGE_KEY)
  if (!existingData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockProfiles))
  }
}

export function useProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initializeStorage()

    // Simulate API fetch
    const fetchProfiles = () => {
      setLoading(true)
      try {
        const data = localStorage.getItem(STORAGE_KEY)
        setProfiles(data ? JSON.parse(data) : [])
      } catch (error) {
        console.error("Error fetching profiles:", error)
        setProfiles([])
      } finally {
        setLoading(false)
      }
    }

    fetchProfiles()
  }, [])

  const createProfile = async (profileData: Omit<Profile, "id" | "joinDate">) => {
    const newProfile: Profile = {
      ...profileData,
      id: Date.now().toString(),
      joinDate: new Date().toISOString(),
    }

    const updatedProfiles = [...profiles, newProfile]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfiles))
    setProfiles(updatedProfiles)

    return newProfile
  }

  const updateProfile = async (id: string, profileData: Partial<Omit<Profile, "id" | "joinDate">>) => {
    const updatedProfiles = profiles.map((profile) => (profile.id === id ? { ...profile, ...profileData } : profile))

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfiles))
    setProfiles(updatedProfiles)
  }

  const deleteProfile = async (id: string) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfiles))
    setProfiles(updatedProfiles)
  }

  return { profiles, loading, createProfile, updateProfile, deleteProfile }
}

export function useProfile(id: string) {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) {
      setProfile(null)
      setLoading(false)
      return
    }

    initializeStorage()

    // Simulate API fetch for a single profile
    const fetchProfile = () => {
      setLoading(true)
      try {
        const data = localStorage.getItem(STORAGE_KEY)
        const profiles: Profile[] = data ? JSON.parse(data) : []
        const foundProfile = profiles.find((p) => p.id === id) || null
        setProfile(foundProfile)
      } catch (error) {
        console.error("Error fetching profile:", error)
        setProfile(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [id])

  return { profile, loading }
}

