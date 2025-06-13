import { defineStore } from 'pinia'
import type { loginObj } from '@/types/dataType'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      userList: [
        {
          id: 'KBU0001',
          userName: 'Harith Azizul',
          email: 'kabau@test.mail',
          img: 'BN',
          password: 'inirahsia',
          userStatus: 'active',
          role: 'chef',
        },
        {
          id: 'KBU0003',
          userName: 'Munirah Ainun',
          email: 'kabau@test.mail',
          img: 'BN',
          password: 'inirahsia',
          userStatus: 'active',
          role: 'admin',
        },
      ],
    }
  },
  getters: {
    // findCmpnyByCode(state) {
    //   return (code) => {
    //     return state.compList.find((item) => item.code.toString() === code)
    //   }
    // },
    loginCheck(state) {
      return (login: loginObj) => {
        return state.userList.find(
          (item) => item?.id === login?.id && item?.password === login?.pswd,
        )
      }
    },
  },
})
