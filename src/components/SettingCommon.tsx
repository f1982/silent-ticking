import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import IconButton from '@material-ui/core/IconButton'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const SettingRow = styled(Box)`
  padding: 10px 0 10px 0;
`

interface SettingCommonProps {
  children: React.ReactNode
}

const SettingCommon: React.FC<SettingCommonProps> = ({ children }) => {
  return (
    <Wrapper>
      <Box
        p={4.2}
        display='flex'
        height='100%'
        width='300px'
        flexDirection='column'>
        <SettingRow>
          <Box
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='space-between'>
            <Typography variant='h5' component='h1'>
              Silent Ticking
            </Typography>
            <Box flex={1} />
            <IconButton>
              <HighlightOffIcon color='primary' fontSize='large' />
            </IconButton>
          </Box>
        </SettingRow>

        <Box height='30px' />
        {children}
        <Box flex={1} />

        <Box>
          <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column'>
              <Typography>Designer</Typography>
              <Typography>Jerry</Typography>
            </Box>
            <Box display='flex' ml={3} flexDirection='column'>
              <Typography>Developer</Typography>
              <Typography>Andy</Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Button
            variant='outlined'
            href='https://www.buymeacoffee.com/jerryandy'
            size='small'
            startIcon={<LocalCafeIcon />}
            color='primary'>
            Buy me a Coffee
          </Button>
        </Box>
        <Box>
          <Typography>Copyright 2020</Typography>
        </Box>
      </Box>
    </Wrapper>
  )
}

export default SettingCommon
