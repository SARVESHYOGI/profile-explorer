"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe, Briefcase, Calendar } from "lucide-react";
import { MapView } from "@/components/map-view";
import { Skeleton } from "@/components/ui/skeleton";
import { useProfile } from "@/lib/use-profiles";

interface ProfileDetailProps {
  readonly id: string;
}

export function ProfileDetail({ id }: Readonly<ProfileDetailProps>) {
  const { profile, loading } = useProfile(id);

  if (loading || !profile) {
    return (
      <div className="flex justify-center items-center h-40">
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>
              {profile.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="mr-1 h-4 w-4" />
              <span>
                {profile.location.city}, {profile.location.country}
              </span>
            </div>
            {profile.profession && (
              <div className="flex items-center text-muted-foreground mt-1">
                <Briefcase className="mr-1 h-4 w-4" />
                <span>{profile.profession}</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">About</h2>
          <p>{profile.description}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.email && (
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{profile.email}</span>
              </div>
            )}
            {profile.phone && (
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{profile.phone}</span>
              </div>
            )}
            {profile.website && (
              <div className="flex items-center">
                <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {profile.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {profile.joinDate && (
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>
                  Joined {new Date(profile.joinDate).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </div>

        {profile.interests && profile.interests.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <h2 className="font-semibold">Location</h2>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px] w-full">
              <MapView
                longitude={profile.location.coordinates.longitude}
                latitude={profile.location.coordinates.latitude}
                title={profile.name}
              />
            </div>
            <div className="p-4 border-t">
              <p className="text-sm">
                {profile.location.street && `${profile.location.street}, `}
                {profile.location.city}, {profile.location.country}
                {profile.location.postalCode &&
                  ` ${profile.location.postalCode}`}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
