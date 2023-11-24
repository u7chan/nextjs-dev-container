'use client'
import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

export default function StarredPage() {
  const [me, setMe] = useState<{ name: string; email: string }>()
  useEffect(() => {
    ;(async () => {
      const result = await fetch('/api/me', { cache: 'no-store' })
      const { name, email } = await result.json()
      setMe({ name, email })
    })()
  }, [])
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h5' gutterBottom>
          Starred Page
        </Typography>
        <Box>
          {me ? (
            <>
              <Typography variant='body1'>User Name: {me?.name}</Typography>
              <Typography variant='body1'>User Email: {me?.email}</Typography>
            </>
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
    </Container>
  )
}
