import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import { breakpoints } from '../utils/styledBreakpoints'

const Wrapper = styled.div`
  font-size: 1.8rem;
  min-width: 11rem;
  display: inline-block;
  text-align: left;
  ${breakpoints('font-size', 'rem', [{ 1200: 1.2 }, { 600: 0.9 }])};
`
interface DateDisplayProps {
  format?: string
}
const DateDisplay: React.FC<DateDisplayProps> = ({ format = 'DD/MM/YYYY' }) => {
  const date = new Date()
  return (
    <Wrapper>
      <Moment format={format}>{date}</Moment>
    </Wrapper>
  )
}

export default DateDisplay
