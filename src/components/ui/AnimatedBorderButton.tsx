import React, { forwardRef } from "react";

interface AnimatedBorderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
}

export const AnimatedBorderButton = forwardRef<HTMLButtonElement & HTMLAnchorElement, AnimatedBorderButtonProps>(
  ({ children, className = "", href, target, rel, ...props }, ref) => {
    const classes = `relative inline-flex items-center justify-center bg-transparent border border-border 
      text-foreground hover:border-primary/50 transition-all 
      duration-1000 focus:outline-none focus-visible:ring-2 
      focus-visible:ring-primary focus-visible:ring-offset-2 
      disabled:opacity-50 disabled:cursor-not-allowed group 
      px-8 py-4 text-lg font-medium rounded-full overflow-visible 
      animated-border ${className}`;

    const svgBorder = (
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 
             A 29,29 0 0 0 30,59 
             L 170,59 
             A 29,29 0 0 0 199,30 
             A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
    );

    const innerContent = (
      <span className="relative z-10 flex items-center justify-center gap-2">
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
          {svgBorder}
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
        {svgBorder}
        {innerContent}
      </button>
    );
  }
);

AnimatedBorderButton.displayName = "AnimatedBorderButton";

