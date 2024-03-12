<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      bordered
      class="bg-primary"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          TableFlow RPG
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <ActionsDrawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import ActionsDrawer from 'src/components/ActionsDrawer.vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const data = reactive({
      leftDrawerOpen: ref(false)
    })

    return {
      ...toRefs(data)
    }
  },
  components: {
    ActionsDrawer
  },
});
</script>
