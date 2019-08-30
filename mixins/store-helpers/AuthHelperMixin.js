import { AUTH_GET_USERID, AUTH_GET_USERNAME, AUTH_IS_ADMIN, AUTH_IS_AUTHENTICATED } from '@/types/auth/getters'
import { AUTH_LOGOUT } from '@/types/auth/actions'
import { PASSWORT_FORGET, PASSWORT_RESET, SIGN_IN, SIGN_UP, CONFIRM_ACCOUNT } from '@/routes/auth'
import { STARTPAGE } from '@/routes'
export default {
  data () {
    return {
      AuthRoutes: {
        PASSWORT_RESET,
        PASSWORT_FORGET,
        SIGN_UP,
        SIGN_IN,
        CONFIRM_ACCOUNT
      }
    }
  },
  methods: {
    async register (email, password) {
      await this.$store.dispatch()
    },
    async logout () {
      await this.$store.dispatch(AUTH_LOGOUT)
      this.$notify({ text: `Goodbye ${this.getUsername}`, type: 'is-success', group: 'alerts' })
      this.$router.push(STARTPAGE)
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters[AUTH_IS_AUTHENTICATED]
    },
    isAdmin () {
      return this.$store.getters[AUTH_IS_ADMIN]
    },
    getUsername () {
      return this.$store.getters[AUTH_GET_USERNAME]
    },
    getUserID () {
      return this.$store.getters[AUTH_GET_USERID]
    }
  }

}
