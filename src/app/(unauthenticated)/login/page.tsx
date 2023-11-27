'use client'
import { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import FormHelperText from '@mui/material/FormHelperText'
import CircularProgress from '@mui/material/CircularProgress'

import Copyright from '@/components/Copyright'
import Form from '@/components/Form'
import FormState from '@/components/FormState'
import TextField from '@/components/TextField'

interface LoginForm {
  email: string
  password: string
}

export default function Page() {
  const router = useRouter()
  const { size } = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')

  useEffect(() => {
    if (size > 0) {
      router.replace('/login')
    }
  }, [size, router])

  const handleSubmit = (data: LoginForm) => {
    setLoading(true)
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
      .catch((e) => {
        console.error(e)
        setErrorText(`Unhandled error: ${e.message}`)
      })
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log in to your account
        </Typography>
        <Form defaultValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
          <TextField name='email' label='Email Address' autoComplete='email' required autoFocus disabled={loading} />
          <TextField
            name='password'
            label='Password'
            required
            type='password'
            autoComplete='current-password'
            disabled={loading}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' disabled={loading} />}
            label='Remember me'
          />
          <FormHelperText error={true}>{errorText}</FormHelperText>
          <FormState>
            {({ disabled }) => (
              <>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2, height: 40 }}
                  disabled={disabled || loading}
                >
                  {loading ? <CircularProgress thickness={5} size={20} /> : <>Log in</>}
                </Button>
              </>
            )}
          </FormState>
        </Form>
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
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
