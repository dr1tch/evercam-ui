import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../config"
import { Size, BaseColor, EButtonVariants } from "@/types"

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
export const ButtonColors = [
  BaseColor.default,
  BaseColor.error,
  BaseColor.info,
  BaseColor.primary,
  BaseColor.success,
  BaseColor.white,
] as const
export const ButtonSizes = [Size.sm, Size.md, Size.lg] as const
export const ButtonVariants = [
  EButtonVariants.solid,
  EButtonVariants.outlined,
  EButtonVariants.link,
] as const
export const BaseColors = [
  BaseColor.warning,
  BaseColor.error,
  BaseColor.info,
  BaseColor.success,
  BaseColor.primary,
  BaseColor.default,
] as const

export const KitIcons = [
  "fak  fa-evercam-logo",
  "fak  fa-itwin-logo",
  "fak  fa-concrete-pump",
  "fak  fa-concrete-truck",
  "fak  fa-tank-truck",
  "fak  fa-tipping-truck",
  "fak  fa-unknown-vehicle",
  "fak  fa-camera-dome",
]

export default {}
