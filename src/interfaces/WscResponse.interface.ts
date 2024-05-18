import { Wsc } from "../stores/identity/interfaces/wsc.interface";
import { User } from '../stores/identity/interfaces/user.interface'
import { Screem } from "../stores/identity/interfaces/screem.interface";

export interface WscResponse {
    wsc: Wsc
}

export interface UserResponse {
    user: User
}

export interface ScreenRespone {
    screen: Screem
}