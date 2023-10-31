import { BadgeSizes, AvatarSizes, IconSizes, BadgeColors } from "@/constants"

export enum Size {
  dot = "dot",
  xs = "xs",
  sm = "sm",
  md = "base",
  base = "base",
  lg = "lg",
  xl = "xl",
  "2xl" = "2xl",
  "3xl" = "3xl",
  "4xl" = "4xl",
  "5xl" = "5xl",
  "6xl" = "6xl",
  "7xl" = "7xl",
  "8xl" = "8xl",
  "9xl" = "9xl",
}

export enum BaseColor {
  warning = "warning",
  error = "error",
  info = "info",
  success = "success",
  primary = "primary",
  brand = "brand",
  default = "default",
}

export type TBadgeSize = (typeof BadgeSizes)[number]

export type TAvatarSize = (typeof AvatarSizes)[number]

export type TIconSize = (typeof IconSizes)[number]

export type TBadgeColor = (typeof BadgeColors)[number]

export type TailwindColorClass = string

export type FlexJustifyContent =
  | "around"
  | "between"
  | "center"
  | "end"
  | "evenly"
  | "normal"
  | "start"
  | "stretch"

export type FlexAlignItems = "start" | "center" | "end" | "baseline" | "stretch"

export type FlexAlignContent =
  | "around"
  | "baseline"
  | "between"
  | "center"
  | "end"
  | "evenly"
  | "normal"
  | "start"
  | "stretch"

export type FlexAlignSelf =
  | "auto"
  | "baseline"
  | "center"
  | "end"
  | "start"
  | "stretch"

export default {}
