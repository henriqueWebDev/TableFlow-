<template>
  <div
    style="border: solid 1px black;"
  >
    <q-img
      id="grid"
      :src="background"
      :draggable="false"
      :fit="'cover'"
    >
      <Token
        v-for="(item, index) in tokens"
        :key="index"
        :tokenData="item"
      />
    </q-img>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import Token from './components/Token.vue'

export default defineComponent({
  name: 'GridPage',
  setup() {
    const data = reactive({
      background: ref("https://i.pinimg.com/564x/06/c9/81/06c98185df3aaff10a1bb6649525dc61.jpg"),
      tokens: ref({
        token1: {
          uuid: 1,
          position: {x: 0, y: 0},
          tokenImage: "https://i.redd.it/2dp1qojb8un91.png",
          size: "xs",
          status: {
            life: {
              current: 10,
              total: 15,
            },
            sanity: {
              current: 2,
              total: 15,
            },
            magic: {
              current: 2,
              total: 15,
            }
          }
        },
        token2: {
          uuid: 2,
          position: {x: 60, y: 0},
          tokenImage: "https://i.pinimg.com/originals/be/70/80/be70806e9669c7698678c5655d92c0a8.png",
          size: "sm",
          status: {
            life: {
              current: 10,
              total: 15,
            },
            sanity: {
              current: 2,
              total: 15,
            },
            magic: {
              current: 2,
              total: 15,
            }
          }
        },
        token3: {
          uuid: 1,
          position: {x: 150, y: 0},
          tokenImage: "https://i.redd.it/2dp1qojb8un91.png",
          size: "md",
          status: {
            life: {
              current: 10,
              total: 15,
            },
            sanity: {
              current: 2,
              total: 15,
            },
            magic: {
              current: 2,
              total: 15,
            }
          }
        },
        token4: {
          uuid: 2,
          position: {x: 250, y: 0},
          tokenImage: "https://i.pinimg.com/originals/be/70/80/be70806e9669c7698678c5655d92c0a8.png",
          size: "lg",
          status: {
            life: {
              current: 10,
              total: 15,
            },
            sanity: {
              current: 2,
              total: 15,
            },
            magic: {
              current: 2,
              total: 15,
            }
          }
        },
        token5: {
          uuid: 2,
          position: {x: 370, y: 0},
          tokenImage: "https://i.pinimg.com/originals/be/70/80/be70806e9669c7698678c5655d92c0a8.png",
          size: "xl",
          status: {
            life: {
              current: 10,
              total: 15,
            },
            sanity: {
              current: 2,
              total: 15,
            },
            magic: {
              current: 2,
              total: 15,
            }
          }
        }
      })
    })

    return {
      ...toRefs(data)
    }
  },
  components: {
    Token
  }
})
</script>
