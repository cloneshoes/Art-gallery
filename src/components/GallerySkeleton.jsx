export default function GallerySkeleton() {
  return (
    <div className="columns-1 md:columns-3 gap-10 space-y-10">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="h-[300px] w-full bg-white/10 animate-pulse break-inside-avoid"
        />
      ))}
    </div>
  );
}
