import { task } from '@trigger.dev/sdk/v3'

export const exampleTask = task({
  id: 'example',
  description: 'Example task',
  run: async (_payload: null) => {
    console.log('Hello from the edge 👋')
    return { message: 'Hello from the edge 👋' }
  },
})
