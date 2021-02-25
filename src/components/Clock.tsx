import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import 'moment-timezone'

const getTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone as string
}

const Separator = styled.span`
  font-size: 20px;
  font-weight: 0;
`
const TimeSegment = styled.span`
  font-size: 90px;
  display: inline-block;
  width: 9rem;
`

interface ClockProps {
  format?: '12h' | '24h'
  showSec?: boolean
}

const Clock: React.FC<ClockProps> = ({ format = '12h', showSec = false }) => {
  const [time, setTime] = useState('')

  let formatString = format === '12h' ? 'hh:mm' : 'kk:mm'
  formatString += showSec ? ':ss' : ''

  const intervalDuration = showSec ? 1000 : 60 * 1000

  const dayTime = moment().format('A')
  const updateTime = () => {
    setTime(moment().tz(getTimezone()).format(formatString))
  }
  useEffect(() => {
    updateTime()
    const timer = setInterval(updateTime, intervalDuration)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      {time.split(':').map((segment, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && <Separator>:</Separator>}
            <TimeSegment>{segment}</TimeSegment>
          </React.Fragment>
        )
      })}
      {format === '12h' && <span>{dayTime}</span>}
    </div>
  )
}

export default Clock
