import dotenv from 'dotenv'
dotenv.config()

const appKey = process.env.AppKey
const appId = process.env.AppId
export {
    appKey, appId
}