import { Suspense } from "react";
import ProfileList from "@/components/profile-list";
import { SearchFilters } from "@/components/search-filters";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            Profile Explorer
          </h1>
          <p className="text-muted-foreground">
            Browse through profiles and explore their locations on the map
          </p>
        </div>

        <SearchFilters />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Suspense fallback={<ProfileListSkeleton />}>
              <ProfileList />
            </Suspense>
          </div>
          <div className="hidden md:block md:col-span-1 sticky top-6 h-[calc(100vh-6rem)]">
            <div className="border rounded-lg h-full bg-card">
              <div className="p-4 border-b">
                <h2 className="font-semibold">Map View</h2>
                <p className="text-sm text-muted-foreground">
                  Click on a profile to view their location
                </p>
              </div>
              <div className="p-0 h-[calc(100%-4rem)]">
                <Suspense fallback={<Skeleton className="h-full w-full" />}>
                  <div
                    id="map-container"
                    className="h-full w-full rounded-b-lg overflow-hidden"
                  >
                    {/* Map will be rendered here by the MapView component */}
                  </div>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileListSkeleton() {
  return (
    <div className="space-y-4">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
    </div>
  );
}
