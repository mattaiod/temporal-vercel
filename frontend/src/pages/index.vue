<script setup lang="ts">
import { useApolloClient, useLazyQuery, useQuery } from "@vue/apollo-composable"
import { gql } from "@apollo/client/core"

const { resolveClient } = useApolloClient()
const client = resolveClient()

const state = reactive({
  result: [],
})

const loadData = async () => {
  const res = 
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
