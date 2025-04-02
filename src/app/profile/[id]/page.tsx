import { Suspense } from "react";
import { ProfileDetail } from "@/components/profile-detail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function ProfileDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Profiles
            </Button>
          </Link>
        </div>

        <Suspense fallback={<ProfileDetailSkeleton />}>
          <ProfileDetail id={params.id} />
        </Suspense>
      </div>
    </div>
  );
}

function ProfileDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>

        <div className="space-y-4">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-32 w-full" />
        </div>

        <div className="space-y-4">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>

      <div className="md:col-span-1">
        <div className="border rounded-lg">
          <div className="p-4 border-b">
            <Skeleton className="h-6 w-[150px]" />
          </div>
          <Skeleton className="h-[300px] w-full" />
        </div>
      </div>
    </div>
  );
}
