import { defineStore } from 'pinia'
import type { UserModel } from '~/models/user'
import type { Nullable } from '~/utils/types'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    user: null as Nullable<UserModel>,
  }),

  getters: {
    getUser(): Nullable<UserModel> {
      return this.user
    },
  },
})
