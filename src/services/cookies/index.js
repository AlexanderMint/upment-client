import Cookies from 'universal-cookie'
import { DOMAIN } from 'config'

const defaultOptions = {
  path: '/',
  maxAge: 60 * 60 * 24 * 7,
  domain: DOMAIN
}

export const getCookie = (name, options = {}) => {
  const cookies = new Cookies()

  return cookies.get(name, options)
}

export const setCookie = (name, value, options = {}) => {
  const cookies = new Cookies()

  cookies.set(name, value, {
    ...defaultOptions,
    ...options
  })
}

export const removeCookie = (name, options = {}) => {
  const cookies = new Cookies()

  cookies.remove(name, {
    ...defaultOptions,
    ...options
  })
}
