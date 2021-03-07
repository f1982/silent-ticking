export interface SystemSettings {
  appName: string
  appDescription: string
  appVersion: string
}

export type TimeFormat = '12h' | '24h'
export type STTheme = 'dark' | 'light'

export interface UserSettings {
  timeFormat: TimeFormat
  showSecond: boolean
  showDate: boolean
  theme: STTheme
  fontFamily: string
  blinkSeparator: boolean
}

export interface PomodoroSession {
  sessionName: string
  time: number
}

export interface UserPomodoroSettings {
  sessionName: string
  display: 'progress' | 'circle' | 'digital'
  sessionDuration: number
  break: number
  sharing: number
}

export const DefaultUserSettings: UserSettings = {
  timeFormat: '24h',
  showSecond: true,
  showDate: true,
  theme: 'dark',
  fontFamily: `'Major Mono Display', monospace`,
  // fontFamily: 'Roboto',
  // fontFamily: 'Montserrat',
  blinkSeparator: true
}
