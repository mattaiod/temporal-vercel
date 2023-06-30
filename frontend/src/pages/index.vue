<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable"
import { gql } from "@apollo/client/core"

console.log(3)

const { loading, result, error } = useQuery(gql`
  query MyQuery {
    test {
      test
    }
  }
`)
</script>

<template>
  <div v-if="loading">Loading query...</div>
  <div v-else>
    <ul>
      ff :
      {{
        result
      }}
    </ul>
  </div>
</template>
