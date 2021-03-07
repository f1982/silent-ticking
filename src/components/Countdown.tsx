import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import { breakpoints } from '../utils/styledBreakpoints'
import LinearProgress from '@material-ui/core/LinearProgress'
import Box from '@material-ui/core/Box'

const intervalDuration = 1000

export enum CountdownStyles {
  PROGRESS = 'progress',
  CIRCLE = 'circle',
  DIGITAL = 'digital'
}
const CountdownWrapper = styled.div``
const Wrapper = styled.div`
  position: relative;
  text-align: center;
`

const ProgressWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`
const SeparatorContainer = styled.span`
  display: inline-block;
`

const TimeSegment = styled.span`
  font-size: 8.1rem;
  min-width: 11rem;
  display: inline-block;
  text-align: left;
  ${breakpoints('font-size', 'rem', [{ 1200: 7.2 }, { 600: 3.0 }])};
  ${breakpoints('min-width', 'rem', [{ 1200: 9.6 }, { 600: 4.5 }])};
`

const ColonSegment = styled.span`
  font-size: 5.4rem;
  min-width: 3rem;
  display: inline-block;
  text-align: center;
  ${breakpoints('font-size', 'rem', [{ 1200: 3.9 }, { 600: 2 }])};
  ${breakpoints('min-width', 'rem', [{ 1200: 0.5 }, { 600: 0.5 }])};
`

const IconContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

function pad(num: number) {
  return ('0' + num).slice(-2)
}

function hhmmss(secs: number) {
  const minutes = Math.floor(secs / 60)
  secs = secs % 60
  // const hours = Math.floor(minutes / 60)
  // minutes = minutes % 60
  return `${pad(minutes)}:${pad(secs)}`
  // return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`
}

export interface CountdownProps {
  time: number
  format: 'digital' | 'progress' | 'circle'
  blink?: boolean
  children?: React.ReactNode
  onTimeUp?: () => void
}

const Countdown: React.FC<CountdownProps> = ({
  time = 25 * 60,
  format = 'digital',
  blink = true,
  children = null,
  onTimeUp
}) => {
  const [currentTime, setCurrentTime] = useState<number>(0)

  useEffect(() => {
    setCurrentTime(time)
    const interval = setInterval(() => {
      setCurrentTime((seconds: number) => {
        if (seconds > 1) {
          return seconds - 1
        } else {
          clearInterval(interval)
          if (onTimeUp && time > 0) onTimeUp()
          return 0
        }
      })
    }, intervalDuration)
    return () => clearInterval(interval)
  }, [time, onTimeUp])

  const getSeparator = () => {
    if (!blink) {
      return <ColonSegment>:</ColonSegment>
    } else {
      if (currentTime % 2 === 0) {
        return <ColonSegment>&nbsp;</ColonSegment>
      } else {
        return <ColonSegment>:</ColonSegment>
      }
    }
  }

  const getDigitalMode = (current: number, total: number) => {
    return (
      <div>
        {hhmmss(current)
          .split(':')
          .map((segment: string, index: number) => {
            return (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <SeparatorContainer>{getSeparator()}</SeparatorContainer>
                )}
                <TimeSegment>{segment}</TimeSegment>
              </React.Fragment>
            )
          })}
      </div>
    )
  }

  const getCircleMode = (current: number, total: number) => {
    return (
      <Wrapper>
        <CircularProgress
          style={{ margin: `0 auto` }}
          variant='determinate'
          size={234}
          value={(total - current / total) * 100}
        />
        {children && <IconContainer>{children}</IconContainer>}
      </Wrapper>
    )
  }

  const getProgressMode = (current: number, total: number) => {
    return (
      <ProgressWrapper>
        <LinearProgress
          style={{ width: '100%', height: '3rem' }}
          variant='determinate'
          color='secondary'
          value={(1 - current / total) * 100}
        />
        {children && (
          <Box display='flex' mt={2} justifyContent='center'>
            {children}
          </Box>
        )}
      </ProgressWrapper>
    )
  }

  const getCountdown = (format: string) => {
    switch (format) {
      case 'digital':
        return getDigitalMode(currentTime, time)
      case 'progress':
        return getProgressMode(currentTime, time)
      default:
        return getCircleMode(currentTime, time)
    }
  }

  return <CountdownWrapper>{getCountdown(format)}</CountdownWrapper>
}

export default Countdown
