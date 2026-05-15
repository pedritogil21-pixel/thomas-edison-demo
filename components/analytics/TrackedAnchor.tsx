"use client";

import type { ComponentProps, ReactNode } from "react";
import { track } from "@/lib/analytics";

type Props = Omit<ComponentProps<"a">, "onClick"> & {
  event: string;
  params?: Record<string, string | number | boolean>;
  children: ReactNode;
};

/**
 * <a> que dispara un evento GA4 al click. No-op si gtag no esta cargado.
 * No bloquea la navegacion - el click se procesa async via dataLayer.
 */
export function TrackedAnchor({ event, params, children, ...rest }: Props) {
  return (
    <a {...rest} onClick={() => track(event, params)}>
      {children}
    </a>
  );
}
