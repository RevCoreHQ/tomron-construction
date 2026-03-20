import { ElementType, ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
}

export function TextReveal({ children, className, as: Tag = 'h2' }: TextRevealProps) {
  return <Tag className={className}>{children}</Tag>;
}
