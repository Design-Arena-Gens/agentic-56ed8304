import { clsx } from "clsx";

export function Avatar({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-slate-200 shadow-inner">
      {children}
    </div>
  );
}

export function AvatarFallback({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={clsx("flex h-full w-full items-center justify-center text-sm font-semibold", className)}>{children}</span>;
}
