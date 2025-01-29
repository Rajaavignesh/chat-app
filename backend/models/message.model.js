import mongoose from "mongoose"
// import { encrypt } from "../utils/encryption.js"

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

// Middleware to encrypt message before saving
// messageSchema.pre('save', function (next) {
//   if (this.isModified('message')) {
//     this.message = encrypt(this.message) // Encrypt the message
//   }
//   next()
// })


const Message = mongoose.model("Message", messageSchema)

export default Message
