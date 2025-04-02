"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MapPin, MapIcon, ArrowRight } from "lucide-react";
import { MapView } from "@/components/map-view";
import Link from "next/link";
import type { Profile } from "@/lib/types";

interface ProfileCardProps {
  profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>
                {profile.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{profile.name}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-3 w-3" />
                <span>
                  {profile.location.city}, {profile.location.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{profile.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" onClick={toggleMap}>
          <MapIcon className="mr-2 h-4 w-4" />
          {showMap ? "Hide Location" : "Show Location"}
        </Button>
        <Link href={`/profile/${profile.id}`}>
          <Button variant="ghost" size="sm">
            View Profile
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>

      {showMap && (
        <div className="md:hidden mt-4 h-[200px] w-full border-t">
          <MapView
            longitude={profile.location.coordinates.longitude}
            latitude={profile.location.coordinates.latitude}
            title={profile.name}
          />
        </div>
      )}

      {showMap && (
        <div className="hidden md:block">
          <MapView
            longitude={profile.location.coordinates.longitude}
            latitude={profile.location.coordinates.latitude}
            title={profile.name}
          />
        </div>
      )}
    </Card>
  );
}
