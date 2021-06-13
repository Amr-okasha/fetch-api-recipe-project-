import dotenv from '/dotenv'
dotenv.config()

const appKey = process.env.AppKey
const appId = process.env.AppId

console.log(appkey)

export {
    appKey, appId
}