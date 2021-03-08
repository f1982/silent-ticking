import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import React from 'react'

interface SettingCommonProps {
  children: React.ReactNode
}

const SettingCommon: React.FC<SettingCommonProps> = ({ children }) => {
  return (
    <Box display='flex' flex={1} p={5} flexDirection='column'>
      <Box>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'>
          <Typography
            variant='h5'
            style={{ lineHeight: '48px' }}
            component='h1'>
            Silent Ticking
          </Typography>
          <Box flex={1} />
          <IconButton>
            <CloseIcon color='primary' fontSize='default' />
          </IconButton>
        </Box>
      </Box>
      <Box mt={5} />
      {children}
      <Box flex={1} />
      <Box mt={3}>
        <Box display='flex' flexDirection='row'>
          <Box display='flex' flexDirection='column'>
            <Typography>Designer</Typography>
            <Typography>Jerry</Typography>
          </Box>
          <Box flex={1} />
          <Box display='flex' flexDirection='column'>
            <Typography>Developer</Typography>
            <Typography>Andy</Typography>
          </Box>
        </Box>
      </Box>
      <Box mt={3}>
        <Button
          fullWidth
          variant='outlined'
          href='https://www.buymeacoffee.com/jerryandy'
          size='small'
          startIcon={<LocalCafeIcon />}
          color='primary'>
          Buy me a Coffee
        </Button>
      </Box>
      <Box mt={3} mb={5}>
        <Typography>Copyright 2020</Typography>
      </Box>
    </Box>
  )
}

export default SettingCommon
