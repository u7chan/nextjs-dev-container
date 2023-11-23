'use client'
import { useState, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Copyright from '@/components/Copyright'
import Link from '@mui/material/Link'

export default function Page() {
  const [send, setSend] = useState(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSend(true)
  }
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          {send ? 'Please check your inbox' : 'Forgot your password'}
        </Typography>
      </Box>
      {send ? (
        <Box sx={{ m: 3 }}>
          <Typography>We sent an email to test. Click the link in the email to reset your password.</Typography>
        </Box>
      ) : (
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Send
          </Button>
        </Box>
      )}
      <Link href='/login' variant='body2'>
        Go back to Log in
      </Link>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
