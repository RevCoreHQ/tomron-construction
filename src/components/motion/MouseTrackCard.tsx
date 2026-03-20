import { ReactNode } from 'react';

interface MouseTrackCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function MouseTrackCard({ children, className }: MouseTrackCardProps) {
  return <div className={className}>{children}</div>;
}
