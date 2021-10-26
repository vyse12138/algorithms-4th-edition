a
<script setup lang="ts">
import { Ref, ref, getCurrentInstance } from 'vue'

defineProps<{ width: string; height: string; color: string }>()
let startPosition: number[] = []
let endPosition: number[] = []
let draggingMoveVectorRange: number[] = []
const outerElement = document.body
const onMouseDown = (e: MouseEvent) => {
  e.stopPropagation()
  startPosition = [e.pageX, e.pageY]

  if (outerElement && e.target) {
    const outerElementRect = outerElement.getBoundingClientRect()
    const elementRect = (e.target as HTMLElement).getBoundingClientRect()
    draggingMoveVectorRange = [
      outerElementRect.top - elementRect.top,
      outerElementRect.bottom - elementRect.bottom,
      outerElementRect.left - elementRect.left,
      outerElementRect.right - elementRect.right
    ]
  }
}
const onMouseMove = (e: MouseEvent) => {
  if (startPosition && draggingMoveVectorRange) {
    endPosition = [e.pageX, e.pageY]

    if (e.target instanceof HTMLElement) {
      e.target.style.transform = `translate3d(${11}px, ${11}px, 0px)`
    }
  }
}
const onMouseUp = (e: MouseEvent) => {
  startPosition = []
}

const addEventListener = () => {
  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}
addEventListener()
</script>

<template>
  <div class="cell"></div>
</template>

<style scoped>
.cell {
  height: v-bind(height);
  width: v-bind(width);
  background-color: v-bind(color);
  margin: 10px;
}
</style>
