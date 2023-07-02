<script setup lang="ts">
import { useSignUpEmailPassword } from '@nhost/vue'
import { useRouter } from 'vue-router'

const { signUpEmailPassword } = useSignUpEmailPassword()
const router = useRouter()

const email = ref('')
const password = ref('')
const handleSubmit = async (event: Event) => {
  event.preventDefault()
  const { isSuccess } = await signUpEmailPassword(email, password)
  if (isSuccess)
    router.push('/')
}
</script>

<template>
  <form @submit="handleSubmit">
    <input v-model="email" type="email" placeholder="Email" class="input">
    <br>
    <input v-model="password" type="password" placeholder="Password" class="input">
    <br>

    <button class="btn-submit" type="submit">
      Sign up
    </button>
  </form>
</template>
