import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[250px]" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-[120px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <Skeleton className="h-6 w-[250px] mb-2" />
            <Skeleton className="h-4 w-[180px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Skeleton className="h-5 w-5 mt-0.5" />
                    <div className="space-y-1 flex-1">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[220px]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-[140px] mb-1" />
                    <Skeleton className="h-5 w-[180px]" />
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[180px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-[350px] mb-4" />
          <div className="space-y-4">
            <Skeleton className="h-[300px] w-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
