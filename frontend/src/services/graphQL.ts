import { useApolloClient } from '@vue/apollo-composable'
const { resolveClient } = useApolloClient()
const client = resolveClient()

const loadData = async () => {
  const keyToFetch = "test"
  const res = await client.query<{ test: number }>({
    query: gql`
      query MyQuery {
        test {
          test
          test2
        }
      }
    `,
  })

  state.result = res.data
}
