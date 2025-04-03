"use client";

import { useState, useEffect } from "react";
import { ProfileCard } from "@/components/profile-card";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useProfiles } from "@/lib/use-profiles";

export default function ProfileList() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query") ?? "";
  const locationFilter = searchParams.get("location") ?? "";

  const { profiles, loading } = useProfiles();
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  useEffect(() => {
    if (!profiles) return;

    const filtered = profiles.filter((profile) => {
      const matchesSearch =
        !searchQuery ||
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation =
        !locationFilter ||
        profile.location.city
          .toLowerCase()
          .includes(locationFilter.toLowerCase()) ||
        profile.location.country
          .toLowerCase()
          .includes(locationFilter.toLowerCase());

      return matchesSearch && matchesLocation;
    });

    setFilteredProfiles(filtered);
  }, [profiles, searchQuery, locationFilter]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (filteredProfiles.length === 0) {
    return (
      <div className="border rounded-lg p-8 text-center">
        <h3 className="font-medium text-lg">No profiles found</h3>
        <p className="text-muted-foreground mt-1">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredProfiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
