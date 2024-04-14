<template>
<vue-draggable-resizable
    class="bg-transparent"
    :h="size.height"
    :w="size.width"
    :x="position.x"
    :y="position.y"
    :parent="true"
  >
  <q-img
      :src="tokenImage"
      spinner-color="black"
      :draggable="false"
      :ratio="1"
      fit="fill"
    />
  </vue-draggable-resizable>
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
