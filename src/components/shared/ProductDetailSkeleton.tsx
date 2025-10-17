import { Skeleton } from "@/components/ui/skeleton";
export function ProductDetailSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Skeleton className="h-10 w-32 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery Skeleton */}
        <div className="space-y-4">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="grid grid-cols-5 gap-2">
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="aspect-square w-full rounded-md" />
            <Skeleton className="aspect-square w-full rounded-md" />
          </div>
        </div>
        {/* Product Info Skeleton */}
        <div className="flex flex-col space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-10 w-1/4" />
          <div className="space-y-3 pt-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
          <div className="flex-grow" />
          <Skeleton className="h-12 w-full mt-auto" />
        </div>
      </div>
    </div>
  );
}