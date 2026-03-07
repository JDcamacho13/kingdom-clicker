<script setup lang="ts">
import { watch, ref } from 'vue'

const props = defineProps<{
  value: number
  icon: string
}>()

interface Pop {
  id: number
  delta: number
}

const pops = ref<Pop[]>([])
const prevValue = ref(props.value)
let nextId = 0
const POP_DURATION_MS = 1200

watch(
  () => props.value,
  (next) => {
    const prev = prevValue.value
    const delta = next - prev
    if (delta !== 0) {
      pops.value.push({ id: nextId++, delta })
    }
    prevValue.value = next
  },
)

function removePop(id: number) {
  pops.value = pops.value.filter((p) => p.id !== id)
}
</script>

<template>
  <span class="relative inline-block">
    <span>{{ icon }} {{ value }}</span>
    <span
      v-for="pop in pops"
      :key="pop.id"
      :class="[
        'absolute left-1/2 bottom-full -translate-x-1/2 translate-y-3 pointer-events-none font-bold text-sm whitespace-nowrap drop-shadow-[0_0_4px_rgba(0,0,0,0.8)]',
        pop.delta > 0 ? 'text-emerald-400' : 'text-red-400',
      ]"
      :style="{ animation: `floatUp ${POP_DURATION_MS}ms ease-out forwards` }"
      @animationend="removePop(pop.id)"
    >
      {{ pop.delta > 0 ? '+' : '' }}{{ pop.delta }}
    </span>
  </span>
</template>
