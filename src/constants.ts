import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../config"
import { Size, BaseColor } from "@/types"

export const fullConfig = resolveConfig(tailwindConfig) as any

export const TextSizes = fullConfig.theme.fontSize

export const Colors = fullConfig.theme.colors

export const BadgeSizes = [
  Size.dot,
  Size.xs,
  Size.sm,
  Size.md,
  Size.lg,
  Size.xl,
] as const

export const AvatarSizes = [
  Size.xs,
  Size.sm,
  Size.md,
  Size.lg,
  Size.xl,
  Size["2xl"],
] as const

export const IconSizes = [
  Size.xs,
  Size.sm,
  Size.md,
  Size.base,
  Size.lg,
  Size.xl,
  Size["2xl"],
  Size["3xl"],
  Size["4xl"],
  Size["5xl"],
  Size["6xl"],
  Size["7xl"],
  Size["8xl"],
  Size["9xl"],
] as const

export const BadgeColors = [
  BaseColor.warning,
  BaseColor.error,
  BaseColor.info,
  BaseColor.success,
  BaseColor.primary,
  BaseColor.default,
] as const

export const EVENTS = [
  "play",
  "pause",
  "ended",
  "loadeddata",
  "waiting",
  "playing",
  "timeupdate",
  "canplay",
  "canplaythrough",
  "statechanged",
]

export default {}
