import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-10 w-[150px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-5 w-[140px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-[50px] mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px] mb-2" />
          <Skeleton className="h-4 w-[300px]" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array(2)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <Skeleton className="h-6 w-[200px] mb-2" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
            <Skeleton className="h-10 w-full sm:w-64" />
          </div>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-[300px] mb-4" />
          <div className="space-y-2">
            {Array(5)
              .fill(null)
              .map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
