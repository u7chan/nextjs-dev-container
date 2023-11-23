'use client'
import { useState, useMemo } from 'react'
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
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState<{
    email: string
    password: string
  }>({ email: '', password: '' })
  const [errorText, setErrorText] = useState('')
  const invalid = useMemo(() => !(formValues.email && formValues.password), [formValues])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    signIn('credentials', {
      redirect: false,
      ...formValues,
    })
      .then((res) => {
        if (!res || res?.error) {
          setErrorText('Authentication failed.')
          return
        }
        router.push('/')
      })
      .catch((e) => {
        console.error(e)
        setErrorText(`Unhandled error: ${e.message}`)
      })
      .finally(() => setLoading(false))
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
        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
        disabled={loading}
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
        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
        disabled={loading}
      />
      <FormControlLabel
        control={<Checkbox value='remember' color='primary' disabled={loading} />}
        label='Remember me'
      />
      <FormHelperText error={true}>{errorText}</FormHelperText>
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} disabled={invalid || loading}>
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
