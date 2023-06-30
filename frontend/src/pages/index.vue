<script setup lang="ts">
import { useApolloClient, useLazyQuery, useQuery } from "@vue/apollo-composable"
import { gql } from "@apollo/client/core"

const { resolveClient } = useApolloClient()
const client = resolveClient()

const state = reactive({
  result: [],
})

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

loadData()
</script>

<template>
  <div>
    <ul>
      <li v-for="item in state.result" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
