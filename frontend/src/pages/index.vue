<script setup lang="ts">
import { useApolloClient, useLazyQuery, useQuery } from "@vue/apollo-composable"
import { fetchAllData_User } from '../services/graphQL'
import type { IdUser } from '../models/user'

const state = reactive({
  result: [],
})

const loadData = async () => {
  const res = await fetchAllData_User("b84dec46-260c-4866-8a9e-ec0dc07ecd31" as IdUser)
  debugger
}

loadData()
</script>

<template>
  <div>
    Hello
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  requiresAuth: true
</route>
