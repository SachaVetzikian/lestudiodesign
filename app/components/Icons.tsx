'use client';

import type { ComponentProps } from "react";
import {
  ArrowRight,
  Check,
  Minus,
  Plus,
} from "@phosphor-icons/react";

type IconProps = Omit<ComponentProps<"svg">, "children"> & {
  size?: number;
  className?: string;
};

export function IconArrowRight({
  size = 16,
  className,
}: IconProps) {
  return <ArrowRight size={size} weight="regular" className={className} aria-hidden="true" />;
}

export function IconCheck({
  size = 14,
  className,
}: IconProps) {
  return <Check size={size} weight="bold" color="#FE5B04" className={className} aria-hidden="true" />;
}

export function IconPlus({
  size = 18,
  className,
}: IconProps) {
  return <Plus size={size} weight="regular" className={className} aria-hidden="true" />;
}

export function IconMinus({
  size = 18,
  className,
}: IconProps) {
  return <Minus size={size} weight="regular" className={className} aria-hidden="true" />;
}

