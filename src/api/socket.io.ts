
import { Manager } from 'socket.io-client'

const manager = new Manager('http://127.0.0.1:3000/socket.io/socket.io.js')

export const socket = manager.socket('/')