import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden border-none shadow-md h-full flex flex-col">
      <CardContent className="p-0 flex-grow flex flex-col">
        <Skeleton className="aspect-square w-full" />
        <div className="p-4 flex-grow flex flex-col space-y-3">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-1/4" />
          <div className="flex-grow" />
          <Skeleton className="h-10 w-full mt-2" />
        </div>
      </CardContent>
    </Card>
  );
}