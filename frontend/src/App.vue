<script setup lang="ts">
useHead({
  title: 'The Big Project',
  meta: [
    { name: 'description', content: 'Best framework ever' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/icons/favicon-dark.svg' : '/icons/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
