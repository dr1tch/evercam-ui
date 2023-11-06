import { BaseColor } from "../.."

export const buttonStyles = {
  solid: {
    colors: {
      [BaseColor.default]:
        "e-bg-slate-500 e-text-white hover:enabled:e-bg-slate-600 focus:e-bg-sky-400 active:e-bg-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.primary]:
        "e-bg-sky-500 e-text-white hover:enabled:e-bg-sky-600 focus:e-bg-sky-400 active:e-bg-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.white]:
        "e-bg-white e-text-gray-500 hover:enabled:e-bg-gray-50 focus:e-bg-sky-400 active:e-bg-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.error]:
        "e-bg-rose-500 e-text-white hover:enabled:e-bg-rose-600 focus:e-bg-rose-400 active:e-bg-rose-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.success]:
        "e-bg-lime-500 e-text-white hover:enabled:e-bg-lime-600 focus:e-bg-lime-400 active:e-bg-lime-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.warning]:
        "e-bg-amber-500 e-text-white hover:enabled:e-bg-amber-600 focus:e-bg-amber-400 active:e-bg-amber-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.info]:
        "e-bg-cyan-500 e-text-white hover:enabled:e-bg-cyan-600 focus:e-bg-cyan-400 active:e-bg-cyan-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
    },
    sizes: {
      sm: "e-px-3 e-py-2 e-gap-2 e-text-sm",
      md: "e-px-4 e-py-2 e-gap-3 e-text-base",
      lg: "e-px-4 e-py-2 e-gap-3 e-text-lg",
    },
  },
  outlined: {
    colors: {
      [BaseColor.default]:
        "e-border e-border-slate-500 e-bg-transparent e-text-slate-500 hover:enabled:e-border-slate-600 hover:enabled:e-text-slate-600 focus:e-border-sky-400 focus:e-text-sky-400 active:e-border-sky-600 active:e-text-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.primary]:
        "e-border e-border-sky-500 e-bg-transparent e-text-sky-500 hover:enabled:e-border-sky-600 hover:enabled:e-text-sky-600 focus:e-border-sky-400 focus:e-text-sky-400 active:e-border-sky-600 active:e-text-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.white]:
        "e-border e-border-sky-500 e-text-sky-500 hover:enabled:e-border-sky-600 hover:enabled:e-text-sky-600 focus:e-border-sky-400 focus:e-text-sky-400 active:e-border-sky-600 active:e-text-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.error]:
        "e-border e-border-rose-500 e-bg-transparent e-text-rose-500 hover:enabled:e-border-rose-600 hover:enabled:e-text-rose-600 focus:e-border-rose-400 focus:e-text-rose-400 active:e-border-rose-600 active:e-text-rose-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.success]:
        "e-border e-border-lime-500 e-bg-transparent e-text-lime-500 hover:enabled:e-border-lime-600 hover:enabled:e-text-lime-600 focus:e-border-lime-400 focus:e-text-lime-400 active:e-border-lime-600 active:e-text-lime-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.warning]:
        "e-border e-border-amber-500 e-bg-transparent e-text-amber-500 hover:enabled:e-border-amber-600 hover:enabled:e-text-amber-600 focus:e-border-amber-400 focus:e-text-amber-400 active:e-border-amber-600 active:e-text-amber-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.info]:
        "e-border e-border-cyan-500 e-bg-transparent e-text-cyan-500 hover:enabled:e-border-cyan-600 hover:enabled:e-text-cyan-600 focus:e-border-cyan-400 focus:e-text-cyan-400 active:e-border-cyan-600 active:e-text-cyan-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
    },
    sizes: {
      sm: "e-px-3 e-py-2 e-gap-2 e-text-sm",
      md: "e-px-4 e-py-2 e-gap-3 e-text-base",
      lg: "e-px-4 e-py-2 e-gap-3 e-text-lg",
    },
  },
  link: {
    colors: {
      [BaseColor.default]:
        "e-text-slate-500 e-bg-transparent hover:enabled:e-text-slate-600 focus:e-text-sky-400 active:e-text-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.primary]:
        "e-text-sky-500 e-bg-transparent hover:enabled:e-text-sky-600 focus:e-text-sky-400 active:e-text-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.white]:
        "e-text-sky-500 hover:enabled:e-text-sky-600 focus:e-text-sky-400 active:e-text-sky-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.error]:
        "e-text-rose-500 e-bg-transparent hover:enabled:e-text-rose-600 focus:e-text-rose-400 active:e-text-rose-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.success]:
        "e-text-lime-500 e-bg-transparent hover:enabled:e-text-lime-600 focus:e-text-lime-400 active:e-text-lime-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.warning]:
        "e-text-amber-500 e-bg-transparent hover:enabled:e-text-amber-600 focus:e-text-amber-400 active:e-text-amber-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
      [BaseColor.info]:
        "e-text-cyan-500 e-bg-transparent hover:enabled:e-text-cyan-600 focus:e-text-cyan-400 active:e-text-cyan-600 disabled:e-opacity-[0.32] disabled:e-cursor-not-allowed",
    },
    sizes: {
      sm: "e-px-3 e-py-2 e-gap-2 e-text-sm",
      md: "e-px-4 e-py-2 e-gap-3 e-text-base",
      lg: "e-px-4 e-py-2 e-gap-3 e-text-lg",
    },
  },
}
