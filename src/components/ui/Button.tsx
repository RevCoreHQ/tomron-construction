import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 shadow-md hover:shadow-lg active:scale-[0.98]',
  secondary: 'bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-md hover:shadow-lg active:scale-[0.98]',
  outline: 'border-2 border-brand-600 text-brand-700 hover:bg-brand-50 active:scale-[0.98]',
  ghost: 'text-brand-700 hover:bg-brand-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
