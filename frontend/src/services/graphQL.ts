import { useApolloClient } from '@vue/apollo-composable'
import { gql } from "@apollo/client/core"
const { resolveClient } = useApolloClient()
const client = resolveClient()

// current graphQL request for all
/*
query MyQuery {
  backlog(where: {user_id: {_eq: "HHDHF"}}) {
    createdAt
    id
    updatedAt
    ListTask(where: {backlog_id: {_is_null: false}}) {
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
    createdAt
    date
    id
    updatedAt
    ListSlot {
      createdAt
      id
      timeBegin
      timeEnd
      updatedAt
      task {
        createdAt
        deadline
        description
        id
        priority
        status
        title
        updatedAt
      }
    }
    ListTaskPriorityMax3 {
      createdAt
      id
      deadline
      description
      priority
      status
      title
      updatedAt
    }
  }
}
