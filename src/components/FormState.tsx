import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  children: (props: { disabled: boolean }) => ReactNode
}

export default function FormState({ children }: Props) {
  const {
    formState: { isValid },
  } = useFormContext()
  const childrenProps = { disabled: !isValid }
  return <>{children(childrenProps)}</>
}
