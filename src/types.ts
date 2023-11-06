import {
  BadgeSizes,
  AvatarSizes,
  IconSizes,
  BaseColors,
  ButtonSizes,
} from "@/constants"

export enum Size {
  dot = "dot",
  xs = "xs",
  sm = "sm",
  md = "md",
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
  white = "white",
}

export enum EButtonVariants {
  solid = "solid",
  outlined = "outlined",
  link = "link",
}

export enum EPlacement {
  start = "start",
  end = "end",
}

// Sizes of Atoms
export type TAvatarSize = (typeof AvatarSizes)[number]
export type TBadgeSize = (typeof BadgeSizes)[number]
export type TButtonSize = (typeof ButtonSizes)[number]
export type TIconSize = (typeof IconSizes)[number]

// Colors of Atoms
export type TBadgeColor = (typeof BaseColors)[number]
export type TButtonColor = (typeof BaseColors)[number]

// other types
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
// export type TFontAwesomeIcons
export type TFontAwesomePrefix =
  | "fa"
  | "fa-solid"
  | "fas"
  | "fa-regular"
  | "far"
  | "fa-light"
  | "fal"
  | "fa-duotone"
  | "fad"
  | "fa-thin"
  | "fat"
  | "fa-kit"
  | "fak"

export type TFontAwesomeIconName = string

export type TFontAwesomeIconCode =
  `${TFontAwesomePrefix} fa-${TFontAwesomeIconName}`

export default {}
