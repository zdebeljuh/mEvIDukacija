<template>
  <q-item clickable :to="link" v-if="link">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>
  </q-item>
  <q-item v-else>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
    <q-item-section avatar>
      <q-icon :name="icon" />
    </q-item-section>
  </q-item>
</template>

<script setup>
defineProps({
  title: String,
  caption: String,
  icon: String,
  link: String,
})
</script>
