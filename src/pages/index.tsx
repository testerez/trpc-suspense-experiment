import { trpc } from "../utils/trpc"

export default function TestPage() {
  console.log("render")
  const helloQuery = trpc.test.hello.useQuery(
    {
      name: "Batman",
    },
    { suspense: true }
  )
  console.log({ message: helloQuery.data })
  if (!helloQuery.data) return <h1>Loading...</h1>
  return <h1>{helloQuery.data}</h1>
}
