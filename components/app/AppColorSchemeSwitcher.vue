<template>
  <button class="w-6 h-6 flex justify-center items-center rounded-md bg-zinc-200 text-zinc-800 dark:text-zinc-200 dark:bg-zinc-800" @click="changeColorScheme">
    <Icon name="ion:sunny" />
  </button>
</template>

<script setup lang="ts">
// * composable
const colorMode = useColorMode()

// * methods
const changeColorScheme = () => {  
  colorMode.preference = colorMode.value == 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>

</style>