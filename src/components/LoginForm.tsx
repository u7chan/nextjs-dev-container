'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import FormHelperText from '@mui/material/FormHelperText'

export default function LoginForm() {
  const [errorText, setErrorText] = useState('')
  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    signIn('credentials', {
      redirect: false,
      ...data,
    })
      .then((res) => {
        if (!res || res?.error) {
          setErrorText('Authentication failed.')
          return
        }
        router.push('/')
      })
      .catch(() => {
        setErrorText('System error.')
      })
  }
  return (
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
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
      />
      <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
      <FormHelperText error={true}>{errorText}</FormHelperText>
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Log in
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='/forgot-password' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}
