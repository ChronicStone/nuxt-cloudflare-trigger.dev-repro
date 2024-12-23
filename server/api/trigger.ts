import { tasks } from '@trigger.dev/sdk/v3'
import type { exampleTask } from '~~/trigger/example'

export default defineEventHandler(async () => {
  const result = await tasks.triggerAndPoll<typeof exampleTask>('example', null)
  return result
})
