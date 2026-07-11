import React, { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "default" | "lg";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  ({ className = "", size = "default", children, href, target, rel, ...props }, ref) => {
    const baseClasses =
      "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

    const innerContent = (
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    );

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          target={target}
          rel={rel}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = "Button";

