import { atom } from 'recoil'

export const loggedIn = atom({
    key: "loggedIn",
    default: false
})

export const username = atom({
    key: "username",
    default: ""
})
export const firstName = atom({
    key: "firstName",
    default: ""
})
export const lastName = atom({
    key: "lastName",
    default: ""
})
export const password = atom({
    key: "password",
    default: ""
})