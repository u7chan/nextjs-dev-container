'use client'
import { ReactNode, ReactElement, isValidElement, cloneElement, Fragment, FC } from 'react'
import Box from '@mui/material/Box'
import { useForm, Control, FieldValues, DefaultValues } from 'react-hook-form'

export interface FormChildrenProps<T extends FieldValues> {
  control?: Control<T>
  // register?: UseFormRegister<T>
}

interface Props<T extends FieldValues> {
  onSubmit?: (values: T) => void
  defaultValues: DefaultValues<T>
  children?: ReactNode | ReactNode[]
}

export default function Form<T extends FieldValues>({ onSubmit, defaultValues, children }: Props<T>) {
  const {
    control,
    // register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues,
  })
  return (
    <Box component='form' onSubmit={onSubmit && handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      {children &&
        (!Array.isArray(children)
          ? isValidElement(children) && cloneElement(children as ReactElement<FormChildrenProps<T>>, { control })
          : children.map((x, i) => (
              <Fragment key={i}>
                {isValidElement(x) && cloneElement(x as ReactElement<FormChildrenProps<T>>, { control })}
              </Fragment>
            )))}
      <button type='submit'>Submit</button>
    </Box>
  )
}
