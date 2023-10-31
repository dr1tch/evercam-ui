import { AvatarSizes, BadgeColors, BadgeSizes, TextSizes } from "../constants"

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

export const BadgeColorOptions = BadgeColors.map((c) => ({
  value: c,
  label: capitalizeFirstLetter(c),
}))

export const BadgeSizeOptions = BadgeSizes.map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))

export const AvatarSizeOptions = AvatarSizes.map((s) => ({
  value: s,
  label: s.toUpperCase(),
}))
