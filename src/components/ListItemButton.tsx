'use client'
import { PropsWithChildren } from 'react'
import Link from 'next/link'
import MuiListItemButton from '@mui/material/ListItemButton'

export function ListItemButton({ href, onClick, children }: PropsWithChildren<{ href: string; onClick?: () => void }>) {
  return href ? (
    <MuiListItemButton component={Link} href={href}>
      {children}
    </MuiListItemButton>
  ) : (
    <MuiListItemButton onClick={onClick}>{children}</MuiListItemButton>
  )
}
