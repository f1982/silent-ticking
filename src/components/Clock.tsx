import React, { useState, useEffect, ReactNode, ReactElement } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import 'moment-timezone'
import { breakpoints } from '../utils/styledBreakpoints'

const DebugMode = false
const intervalDuration = 1000
const dayTime = moment().format('A')

const getTimezone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone as string
}

const SeparatorContainer = styled.span`
  display: inline-block;
`

export const TimeSegment = styled.span`
  font-size: 8.1rem;
  min-width: 11rem;
  display: inline-block;
  text-align: left;
  ${breakpoints('font-size', 'rem', [{ 1200: 7.2 }, { 600: 3.0 }])};
  ${breakpoints('min-width', 'rem', [{ 1200: 9.6 }, { 600: 4.5 }])};
`

export const ColonSegment = styled.span`
  font-size: 5.4rem;
  min-width: 3rem;
  display: inline-block;
  text-align: center;
  ${breakpoints('font-size', 'rem', [{ 1200: 3.9 }, { 600: 2 }])};
  ${breakpoints('min-width', 'rem', [{ 1200: 0.5 }, { 600: 0.5 }])};
`

interface ClockProps {
  hourFormat?: '12h' | '24h'
  showSecond: boolean
  family?: string
  blinkSeparator?: boolean
  digital?: ReactElement | null
  separator?: ReactNode | null
  tickHandler?: (second: number) => void | null
}

const Clock: React.FC<ClockProps> = ({
  hourFormat = '12h',
  showSecond,
  blinkSeparator = true,
  digital: Digital = null,
  separator = null,
  tickHandler = null
}) => {
  const [time, setTime] = useState<string[]>([])
  const [count, setCount] = useState(0)

  const getFormat = () => {
    const hourString = hourFormat === '12h' ? 'hh:mm' : 'kk:mm'
    const secString = showSecond === true ? ':ss' : ''
    return hourString + secString
  }

  useEffect(() => {
    const updateInterval = () => {
      const format = getFormat()
      const timeString = moment().tz(getTimezone()).format(format)
      const segments = timeString.split(':')
      setTime(segments)
      // count
      setCount(value => value + 1)
      if (tickHandler) tickHandler(count)
    }
    // display
    updateInterval()
    // update
    const timer = setInterval(() => {
      updateInterval()
    }, intervalDuration)
    return () => clearInterval(timer)
  }, [showSecond, hourFormat])

  const getSeparator = () => {
    if (!blinkSeparator) {
      return <ColonSegment>:</ColonSegment>
    } else {
      if (count % 2 === 0) {
        return <ColonSegment>&nbsp;</ColonSegment>
      } else {
        return <ColonSegment>:</ColonSegment>
      }
    }
  }

  return (
    <div>
      {time.map((segment, index) => {
        return (
          <React.Fragment key={index}>
            {index !== 0 && (
              <SeparatorContainer>{getSeparator()}</SeparatorContainer>
            )}
            <TimeSegment>{segment}</TimeSegment>
          </React.Fragment>
        )
      })}
      {hourFormat === '12h' && <span>{dayTime}</span>}
      {DebugMode && <div>count: {count}</div>}
    </div>
  )
}

export default Clock
