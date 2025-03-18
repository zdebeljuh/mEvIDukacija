<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- Verzija aplikacije u gornjem lijevom kutu -->
        <div>v{{ $q.version }}</div>

        <!-- Poravnanje naslova alatne trake desno -->
        <q-toolbar-title class="q-ml-auto"> mEvIDukacija </q-toolbar-title>

        <!-- Hamburger menu u gornjem desnom kutu -->
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" show-if-above bordered>
      <q-list>
        <q-item-label header> mEvIDukacija </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Voditelj/ica projekta / Administrator/ica',
    caption: 'Sve pod kontrolom ;)',
    icon: 'school',
    // link: 'https://quasar.dev', dok ne napravimo stranicu, pa dodati /admin ili kako bude
  },
  {
    title: 'Nastavnica/Nastavnik',
    caption: 'Kvalificirani i stručni, spremni dijeliti svoje znanje',
    icon: 'work',
    // link: 'https://github.com/quasarframework',
  },
  {
    title: 'Polaznica/Polaznik edukacije',
    caption: 'Dođoh, vidjeh, naučih!',
    icon: 'person',
    //link: 'https://chat.quasar.dev',
  },
  {
    title: 'Postavke',
    caption: 'Tu je sve po mom!',
    icon: 'settings',
    link: '/postavke', // Ažurirajte link na odgovarajuću stranicu unutar aplikacije
  },
  {
    title: 'Kontakt',
    caption: 'Kako do nas?',
    icon: 'rss_feed',
    link: '/kontakt', // Ažurirajte link na odgovarajuću stranicu unutar aplikacije
  },
]

const rightDrawerOpen = ref(false)

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}
</script>
