<script setup lang="ts">
const { data: base } = await useAsyncData(() => queryCollection('content').path('/base').first())

</script>

<template>
  <ContentRenderer v-if="base" :value="base" />
  <div v-else>Home not found</div>
</template>
