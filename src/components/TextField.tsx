'use client'
import MuiTextField from '@mui/material/TextField'
import { useController, useFormContext, FieldValues, FieldPath } from 'react-hook-form'

interface Props<T extends FieldValues> {
  name: FieldPath<T>
  label?: string
  type?: string
  autoComplete?: string
  autoFocus?: boolean
  required?: boolean
  disabled?: boolean
}

export default function TextField<T extends FieldValues>({
  name,
  label,
  type,
  autoComplete,
  autoFocus,
  required,
  disabled,
}: Props<T>) {
  const { control } = useFormContext<T>()
  const { field } = useController<T>({
    name,
    control,
    rules: { required },
  })
  return (
    <MuiTextField
      label={label}
      type={type}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      required={required}
      disabled={disabled}
      name={field.name}
      value={field.value}
      onBlur={field.onBlur}
      onChange={field.onChange}
      inputRef={field.ref}
      margin='normal'
      fullWidth
    />
  )
}
