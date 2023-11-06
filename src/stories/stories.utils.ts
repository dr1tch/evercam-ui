import {
  AvatarSizes,
  BaseColors,
  BadgeSizes,
  TextSizes,
  ButtonSizes,
  ButtonVariants,
  ButtonColors,
  KitIcons,
} from "../constants"

function capitalizeFirstLetter(inputString: string) {
  if (inputString.length === 0) return inputString

  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  )
}

export const TextSizeOptions = Object.keys(TextSizes).map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))

export const BaseColorOptions = BaseColors.map((c: string) => ({
  value: c,
  label: capitalizeFirstLetter(c),
}))

export const BadgeSizeOptions = BadgeSizes.map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))

export const ButtonSizeOptions = ButtonSizes.map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))

export const AvatarSizeOptions = AvatarSizes.map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))

export const ButtonVariantsOptions = ButtonVariants.map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))

export const ButtonColorsOptions = ButtonColors.map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))

export const IconsOptions = KitIcons.map((s) => ({
  value: s,
  label: s,
}))
