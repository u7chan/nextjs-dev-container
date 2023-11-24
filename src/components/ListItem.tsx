'use client'
import { PropsWithChildren } from 'react'
import MuiListItem from '@mui/material/ListItem'
import { usePathname } from 'next/navigation'

interface Props {
  href: string
}

export default function ListItem({ href, children }: PropsWithChildren<Props>) {
  const pathname = usePathname()
  return (
    <MuiListItem disablePadding sx={{ backgroundColor: pathname === href ? '#dddddd' : undefined }}>
      {children}
    </MuiListItem>
  )
}
