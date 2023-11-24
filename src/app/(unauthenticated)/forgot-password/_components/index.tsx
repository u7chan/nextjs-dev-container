'use client'
import { useState, useMemo, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Copyright from '@/components/Copyright'
import CircularProgress from '@mui/material/CircularProgress'
import Link from '@mui/material/Link'

export default function Layout() {
  const [send, setSend] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState<{
    email: string
  }>({ email: '' })
  const invalid = useMemo(() => !formValues.email, [formValues])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    ;(async () => {
      const result = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { contentType: 'application/json' },
        body: JSON.stringify(formValues),
        cache: 'no-store',
      })
      await result.json()
    })()
      .then(() => setSend(true))
      .finally(() => setLoading(false))
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
            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            disabled={loading}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, height: 40 }}
            disabled={invalid || loading}
          >
            {loading ? <CircularProgress thickness={5} size={20} /> : <>Send</>}
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
