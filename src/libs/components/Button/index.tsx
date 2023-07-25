"use client"
import {ElementRef, useRef} from 'react'
import {AriaButtonProps, useButton} from 'react-aria'

export const AT_BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const
export type AtButtonVariant = keyof typeof AT_BUTTON_VARIANT

export const variantClasses: Record<AtButtonVariant, string> = {
  PRIMARY: 'bg-green-200 hover:bg-green-400 active:bg-green-500',
  SECONDARY: 'bg-blue-200 hover:bg-blue-400 active:bg-blue-500',
  TERTIARY: 'bg-red-200 hover:bg-red-400 active:bg-red-500',
}

export interface AtButtonProps extends AriaButtonProps {
  label: string
  variant?: AtButtonVariant
}

export const AtButton = (props: AtButtonProps) => {
  const { label, variant = 'PRIMARY' } = props
  const ref = useRef<ElementRef<'button'>>(null);
  const { buttonProps } = useButton(props, ref);

  return (
    <button
      ref={ref}
      {...buttonProps}
      className={`transition-colors px-6 py-2 rounded-md ${variantClasses[variant]} ${
        buttonProps.disabled ? 'bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none' : ''
      }`}
    >
      {label}
    </button>
  )
}