<template>
  <VueDraggableResizable
    class="bg-transparent bg-red"
    :h="size.height"
    :w="size.width"
    :x="position.x"
    :y="position.y"
    :parent="true"
    @click="service.preventMovePage"
  >
    <div>
      vida
    </div>
    <div>
      magia
    </div>
    <div>
      sanidade
    </div>
    <q-img
      :src="tokenImage"
      :ratio="1/2"
      spinner-color="primary"
      fit="cover"
      :draggable="false"
    />
    <div>
      <!-- <q-select 
        dense
        :options="status.life.options"
        v-model="status.life.current" 
        class="text-subtitle2 text-bold"
        behavior="dialog"
        hide-dropdown-icon
        style="text-align: center;"
      >
      <template v-slot:selected>
        <div class="text-red text-bold">
          {{status.life.current}}/{{status.life.total}}
        </div>
      </template>
      </q-select> -->
    </div>
  </VueDraggableResizable>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import TokenServices from './services/token.services'
import VueDraggableResizable from "vue-draggable-resizable"

export default defineComponent({
  name: 'TokenComponent',
  props: {
    tokenData: {
      type: Object as () => any,
      required: true
    }
  },
  setup(props) {
    const service = new TokenServices()
    const data = reactive({
      uuid: props.tokenData.uuid,
      tokenImage: props.tokenData.tokenImage,
      position: ref({
        x: ref(props.tokenData.position.x),
        y: ref(props.tokenData.position.y),
      }),
      size: ref({
        category: props.tokenData.size,
        height: ref(),
        width: ref()
      }),
      status: ref({
        life: {
          current: props.tokenData.status?.life.current,
          total: props.tokenData.status?.life.total,
          options: ref()
        },
        sanity: {
          current: props.tokenData.status?.sanity.current,
          total: props.tokenData.status?.sanity.total,
          options: ref()
        },
        magic: {
          current: props.tokenData.status?.magic.current,
          total: props.tokenData.status?.magic.total,
          options: ref()
        }
      })
    })

    onMounted(() => {
      service.handleTokenSize(data)
      service.getStatusOptions(data)
    })

    return {
      ...toRefs(data),
      service
    }
  },
  components: {
    VueDraggableResizable
  }
})
</script>
