import { z } from "zod"
import { baseProcedure, router } from "../trpc"

export const testRouter = router({
  hello: baseProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      return `Hello ${input.name}`
    }),
})
