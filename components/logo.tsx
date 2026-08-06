import { BookOpen } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <BookOpen className="h-4.5 w-4.5" strokeWidth={2.25} />
      </div>
      <span className="text-[15px] font-semibold tracking-tight">
        Book Manager
      </span>
    </div>
  );
}
