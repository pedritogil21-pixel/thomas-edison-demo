import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  "aria-hidden": "true" as const,
  focusable: "false" as const,
  ...props,
});

export const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="currentColor">
    <path d="M20 3.5A11 11 0 0 0 3.6 18.2L2 22l3.9-1.5A11 11 0 1 0 20 3.5Z" />
  </svg>
);

export const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 2l3 7h7l-6 4 2 8-6-4-6 4 2-8-6-4h7z" />
  </svg>
);

export const SparkleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

export const BookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 19V6l8-3 8 3v13" />
    <path d="M8 22V12h8v10" />
  </svg>
);

export const UsersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="9" cy="8" r="4" />
    <circle cx="17" cy="10" r="3" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
  </svg>
);

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2.4}>
    <path d="M5 12l4 4 10-10" />
  </svg>
);

export const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);
