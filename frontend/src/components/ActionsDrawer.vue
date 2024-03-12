<template>
  <q-item
    clickable
  >
    <q-item-section
      avatar
    >
      <q-icon name="window" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-bold text-subtitle1">
        Grid.
      </q-item-label>
      <q-item-label caption>
        Grid do game
      </q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
  >
    <q-item-section
      avatar
    >
      <q-icon name="table_view" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-bold text-subtitle1">
        Configuração do Grid.
      </q-item-label>
      <q-item-label caption>
        Altere o background e outras configurações refente ao grid.
      </q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
  >
    <q-item-section
      avatar
    >
      <q-icon name="person" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-bold text-subtitle1">
        Personagens.
      </q-item-label>
      <q-item-label caption>
        Adicionar e incluir personagens no grid.
      </q-item-label>
    </q-item-section>
  </q-item>

  <q-item
    clickable
  >
    <q-item-section
      avatar
    >
      <q-icon name="person" />
    </q-item-section>
    <q-item-section>
      <q-item-label class="text-bold text-subtitle1">
        Configuração geral.
      </q-item-label>
      <q-item-label caption>
        Tema de cores e outras configurações referentes aos sistema.
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ActionsDrawerComponent',
})
</script>
