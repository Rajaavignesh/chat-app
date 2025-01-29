import CryptoJS from 'crypto-js'

// Define a secret key (store securely in environment variables)
const secretKey = process.env.SECRET_KEY || 'your-secret-key' // NEVER hardcode this in production

// Function to encrypt data
// export const encrypt = (text) => {
//     const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString()
//     return encrypted
// };

// Function to decrypt data
export const decrypt = (encryptedText) => {
    const bytes = CryptoJS.AES.decrypt(encryptedText, secretKey)
    const decrypted = bytes.toString(CryptoJS.enc.Utf8)
    return decrypted
};