import { cn } from "@/lib/utils";

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function FooterSection({ title, children, className }: FooterSectionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  );
}