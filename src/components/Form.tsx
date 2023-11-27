'use client'
import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import { useForm, FieldValues, DefaultValues, FormProvider } from 'react-hook-form'

interface Props<T extends FieldValues> {
  onSubmit?: (values: T) => void
  defaultValues: DefaultValues<T>
}

export default function Form<T extends FieldValues>({
  onSubmit,
  defaultValues,
  children,
}: PropsWithChildren<Props<T>>) {
  const form = useForm({
    defaultValues,
  })
  return (
    <FormProvider {...form}>
      <Box component='form' onSubmit={onSubmit && form.handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        {children}
      </Box>
    </FormProvider>
  )
}
