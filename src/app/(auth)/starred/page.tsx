import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { getUserSession } from '@/auth/getUserSession'

export default async function StarredPage() {
  const userSession = await getUserSession()
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
          <Typography variant='body1'>User Id: {userSession?.id}</Typography>
          <Typography variant='body1'>Company Id: {userSession?.companyId}</Typography>
          <Typography variant='body1'>User Name: {userSession?.name}</Typography>
          <Typography variant='body1'>User Email: {userSession?.email}</Typography>
        </Box>
      </Box>
    </Container>
  )
}
