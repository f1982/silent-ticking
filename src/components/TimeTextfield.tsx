import React from 'react'

import { breakpoints } from '../utils/styledBreakpoints'

interface TimeTextfieldProps {
  content: string
}
const TimeTextfield: React.FC<TimeTextfieldProps> = ({ content }) => {
  return <span>{content}</span>
}
