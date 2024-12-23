import { configure } from '@trigger.dev/sdk/v3'

export default defineEventHandler(() => {
  const config = useRuntimeConfig()
  configure({
    accessToken: config.trigger.secretKey,
  })
})
