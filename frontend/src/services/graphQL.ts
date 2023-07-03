import { useApolloClient } from '@vue/apollo-composable'
import { gql } from "@apollo/client/core"

const { resolveClient } = useApolloClient()
const client = resolveClient()

const res = await client.query({
  query: gql`
    query MyQuery {
      backlog(where: {user_id: {_eq: "b84dec46-260c-4866-8a9e-ec0dc07ecd31"}}) {
        createdAt
        id
        updatedAt
        ListTask(where: {dayPlanning_id: {_is_null: false}}) {
          createdAt
          updatedAt
          title
          status
          priority
          id
          description
          deadline
        }
      }
      dayPlanning {
        ListTask(where: {dayPlanning_id: {_is_null: false}}) {
          createdAt
          deadline
          description
          id
          priority
          status
          timeBegin
          timeEnd
          title
          updatedAt
        }
      }
  }
`,
})

