import { ProfileForm } from "@/components/profile-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewProfilePage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/admin">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Admin
            </Button>
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Add New Profile</h1>
          <p className="text-muted-foreground">
            Create a new profile with personal information and location
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
