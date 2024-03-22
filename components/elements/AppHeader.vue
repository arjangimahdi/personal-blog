<template>
  <div class="w-full px-6 h-16 flex flex-row justify-between items-center bg-zinc-100 dark:bg-zinc-950">
    <AppLogo />

    <AppColorSchemeSwitcher />
  </div>
</template>

<script setup lang="ts">
import AppLogo from '~/components/elements/AppLogo.vue';
import AppColorSchemeSwitcher from '~/components/app/AppColorSchemeSwitcher.vue';
</script>

<style scoped>

</style>