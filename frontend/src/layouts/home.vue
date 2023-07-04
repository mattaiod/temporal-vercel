<script setup lang="ts">
import { either } from '../utils/monads'
import { log } from '../utils/log'
import { signOut } from '~/services/auth'
const router = useRouter()

const fn = {
  async signOut() {
    either(await signOut(), log, () => router.push('/auth/login'))
  },
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Temporal
        </q-toolbar-title>
        <q-btn label="Sign out" flat dense @click="fn.signOut" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
