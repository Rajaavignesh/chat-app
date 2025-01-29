import { Server } from "socket.io"
import http from "http"
import express from "express"
import cors from "cors"

const app = express()

const server = http.createServer(app)

app.use(cors({ origin: "*" }))

const io = new Server(server, {
  cors: {
    // origin: ["http://localhost:5173"],
    // origin: ["http://192.168.0.115:5173"],
    origin: "*",
    methods: ["GET", "POST"],
  },
})

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId]
}

const userSocketMap = {}

io.on("connection", (socket) => {
  console.log("a user connected", socket.id)

  const userId = socket.handshake.query.userId

  if (userId !== "undefined") {
    console.log("userID", userId)
    userSocketMap[userId] = socket.id
  }

  // io.emit  events send to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap))

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id)
    delete userSocketMap[userId]
    io.emit("getOnlineUsers", Object.keys(userSocketMap))
  })
})

export { app, server, io }
