<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        class="main-toolbar"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <img src="https://zoomtail.com/assets/images/zt-logo.png" class="company-logo"/>
          <!--div slot="subtitle">Customer Center</div-->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      :width="270"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'white' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Customer center</q-list-header>
        <q-item class="router-link-active">
          <q-item-side icon="people" />
          <q-item-main label="Customers" sublabel="Add a new customer" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="scss" scoped>
  @import "../../src/scss/layouts/customer-center";
</style>
