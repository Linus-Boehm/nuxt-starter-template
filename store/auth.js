import {
  AUTH_GET_GROUPS,
  AUTH_GET_TOKEN, AUTH_GET_USERID,
  AUTH_GET_USERNAME,
  AUTH_IS_ADMIN,
  AUTH_IS_AUTHENTICATED
} from '@/types/auth/getters'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REAUTHENTICATE } from '@/types/auth/actions'
import { AUTH_SET_REDIRECT, AUTH_SET_USER } from '@/types/auth/mutations'
import { AUTH_LOGIN_RESPONSE } from '@/types/auth/constants'
export const namespaced = false

export const state = () => ({
  user: null,
  dbUser: null,
  isAuthenticated: false,
  redirectRoute: null
})

export const getters = {
  [AUTH_IS_AUTHENTICATED]: (state) => {
    return state.isAuthenticated
  },
  [AUTH_GET_TOKEN]: (state) => {
    if (state.isAuthenticated && state.user) {
      // TODO Adjust for your IDP
      return state.user.token
    }
    return false
  },
  [AUTH_IS_ADMIN]: (state, getters) => {
    if (state.isAuthenticated) {
      const groups = getters[AUTH_GET_GROUPS]
      if (groups && groups.length > 0) {
        // TODO adjust your Admin groups
        return groups.includes('Admin')
      }
    }
    return false
  },
  [AUTH_GET_GROUPS]: (state) => {
    if (state.isAuthenticated && state.user) {
      // TODO Get Usergroups
    }
    return []
  },
  [AUTH_GET_USERID]: (state) => {
    if (state.user && state.user.attributes) {
      // TODO Get User ID
      return state.user.id
    }
    return null
  },
  [AUTH_GET_USERNAME]: (state) => {
    if (state.isAuthenticated) {
      if (state.dbUser && state.dbUser.firstname && state.dbUser.lastname) {
        return `${state.dbUser.firstname} ${state.dbUser.lastname}`
      } else if (state.user) {
        // TODO adjust email field for your IDP
        return state.user.attributes.email.split('@')[0]
      }
    }
    return 'Gast'
  }

}

export const mutations = {
  [AUTH_SET_USER] (state, { user, dbUser, isAuthenticated = false }) {
    state.user = user
    state.dbUser = dbUser
    state.isAuthenticated = isAuthenticated
  },
  [AUTH_SET_REDIRECT] (state, path) {
    state.redirectRoute = path
  }

}

export const actions = {
  /* async */ [AUTH_LOGIN] ({ commit, state, getters }, { email, password }) {
    try {
      const user = {}// TODO Sign in User
      if (user.challengeName === 'SMS_MFA' ||
        user.challengeName === 'SOFTWARE_TOKEN_MFA') {
        // You need to get the code from the UI inputs
        // and then trigger the following function with a button click
      } else if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {

      } else if (user.challengeName === 'MFA_SETUP') {

      } else {
        // SUCCESS
        commit(AUTH_SET_USER, { user, isAuthenticated: true })
        this.$axios.setToken(getters[AUTH_GET_TOKEN])
        return { status: AUTH_LOGIN_RESPONSE.SUCCESS }
      }
    } catch (err) {
      // Logout user
      this.$axios.setToken(false)
      commit(AUTH_SET_USER, { user: null, dbUser: null, isAuthenticated: false })
      let returnState = ''
      // TODO adjust for your error codes
      if (err.code === 'UserNotConfirmedException') {
        returnState = AUTH_LOGIN_RESPONSE.NOT_CONFIRMED
      } else if (err.code === 'PasswordResetRequiredException') {
        returnState = AUTH_LOGIN_RESPONSE.PASSWORD_RESET_NEEDED
      } else if (err.code === 'NotAuthorizedException') {
        returnState = AUTH_LOGIN_RESPONSE.CREDENTIALS_WRONG
      } else if (err.code === 'UserNotFoundException') {
        returnState = AUTH_LOGIN_RESPONSE.CREDENTIALS_WRONG
      } else {
        returnState = AUTH_LOGIN_RESPONSE.UNKOWN_ERROR
      }
      return { status: returnState }
    }
    return { status: AUTH_LOGIN_RESPONSE.UNKOWN_ERROR }
  },
  /* async */ [AUTH_LOGOUT] ({ commit }) {
    try {
      // TODO Logout user
      commit(AUTH_SET_USER, { user: null, isAuthenticated: false })
      this.$axios.setToken(false)
    } catch (e) {
      console.error(e)
    }
    throw new Error('Error on logout')
  },
  /* async */ [AUTH_REAUTHENTICATE] ({ commit }) {
    try {
      // TODO Check if Token is still valid, if valid set Token
      const token = 'Token'
      this.$axios.setToken(token)
      commit(AUTH_SET_USER, { user: {}, isAuthenticated: true })
    } catch (e) {
      this.$axios.setToken(false)
      commit(AUTH_SET_USER, { user: null, isAuthenticated: false })
    }
  }
}
