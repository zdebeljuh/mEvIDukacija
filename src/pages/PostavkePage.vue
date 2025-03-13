<template>
  <q-page class="q-pa-md">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Dark Mode/Light Mode</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="darkMode" />
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Promjena jezika</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="language" label="HR-EN" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const darkMode = ref(false)
const language = ref(false)
</script>

<style>
/* Dodajte stilove po potrebi */
</style>
