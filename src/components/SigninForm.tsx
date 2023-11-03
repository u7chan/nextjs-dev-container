'use client'
import * as React from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

export default function SigninForm() {
  const router = useRouter()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    alert(
      JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      }),
    )
    signIn('credentials', {
      redirect: false,
      ...data,
    })
      .then(() => {
        router.push('/')
      })
      .catch(() => {
        alert('Login Error')
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
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
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
