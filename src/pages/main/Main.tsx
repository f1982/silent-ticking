import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React, { useState } from 'react'
import Moment from 'react-moment'
import styled from 'styled-components'
import ClockKK from '../../components/Clock'
import RightDrawer from './RightDrawer'

const Tools = styled.div`
  position: absolute;
  top: 6%;
  right: 6%;
`

const Main: React.FC = () => {
  const [openDraw, setOpenDraw] = useState(false)
  const [showDate, setShowDate] = useState(true)
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('24h')
  const [showSecond, setShowSecond] = useState(true)

  const date = new Date()
  return (
    <>
      <Tools>
        <IconButton
          onClick={() => {
            setOpenDraw(true)
          }}>
          <MenuIcon color='primary' fontSize='large' />
        </IconButton>
      </Tools>

      {showDate && <Moment format='YYYY/MM/DD'>{date}</Moment>}

      <Box p={6}>
        <ClockKK format={timeFormat} showSec={showSecond} />
      </Box>

      <RightDrawer
        open={openDraw}
        onClose={() => {
          setOpenDraw(false)
        }}
      />
    </>
  )
}

export default Main
