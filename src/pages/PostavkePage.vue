<template>
  <q-page class="q-pa-md">
    <q-list>
      <q-item>
        <q-item-section>
          <q-item-label>Dark Mode</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-toggle v-model="darkMode" @update:model-value="toggleDarkMode" />
        </q-item-section>
      </q-item>

      <q-item clickable @click="changeLanguage">
        <q-item-section>
          <q-item-label>Promjena jezika</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <q-icon name="language" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const darkMode = ref($q.dark.isActive)

function toggleDarkMode() {
  $q.dark.set(darkMode.value)
}

function changeLanguage() {
  // Logika za promjenu jezika
  alert('Promjena jezika nije implementirana')
}
</script>

<style>
/* Dodajte stilove po potrebi */
</style>
