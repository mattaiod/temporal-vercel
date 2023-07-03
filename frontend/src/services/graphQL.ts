import { useApolloClient } from '@vue/apollo-composable'
import { gql } from "@apollo/client/core"
import type { IdUser } from '~/models/user'
import { nhost } from '~/modules/nhost'

export const fetchAllData_User = async (userId: IdUser) => {
  const Request = gql`
  query ($userId: uuid!) {
    backlog(where: {user_id: {_eq: $userId}}) {
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
    },
  } 
`
  return await nhost.graphql.request(Request, { userId })
}

