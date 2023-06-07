<script>
const state = {
  msg: "Hello World",
  fn: 3,
}

// const matchMaybe = (obj: any) => obj
// const $aa = 4

// matchMaybe({
//   JUST: (x: any) => {
//     state.msg = x
//     state.msg = x
//     state.msg = x
//     state.msg = x
//     state.msg = x
//   },
//   NOTHING: () => null,
// })

// const story = {
//   1: matchMaybe(fn1, {
//     JUST: (x: any) => {
//       1.1: fn2,
//       1.2: fn3,
//       1.3: matchBoolean({
//         TRUE: () => {
//           1.3.1: fn4,
//           1.3.2: fn5,
//         },
//         FALSE: () => {
//           1.3.3: fn6,
//           1.3.4: fn7,
//         },
//       }),

//     },
//     NOTHING: () => null,
//   }),
//   }
//   }

//   4: fn4()
// }
</script>

<script setup lang="ts">
const xx = state.msg
state.msg = xx
</script>

<template>
  <h1>{{ state.msg }}</h1>
  <input v-model="state.msg" />
</template>
