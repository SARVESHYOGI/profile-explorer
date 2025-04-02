import { Suspense } from "react";
import { AdminProfileList } from "@/components/admin-profile-list";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage profiles and their information
            </p>
          </div>
          <Link href="/admin/new">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Profile
            </Button>
          </Link>
        </div>

        <div className="border rounded-lg">
          <div className="p-4 border-b bg-muted/50">
            <h2 className="font-semibold">Profiles</h2>
          </div>
          <div className="p-0">
            <Suspense fallback={<AdminProfileListSkeleton />}>
              <AdminProfileList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminProfileListSkeleton() {
  return (
    <div className="p-4 space-y-4">
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
              <div className="ml-auto flex space-x-2">
                <Skeleton className="h-9 w-20" />
                <Skeleton className="h-9 w-20" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
