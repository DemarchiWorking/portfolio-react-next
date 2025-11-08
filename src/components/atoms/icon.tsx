import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  className?: string;
}

export function Icon({ icon: LucideIcon, className }: IconProps) {
  return <LucideIcon className={className} />;
}