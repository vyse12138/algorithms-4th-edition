<script setup lang="ts">
import { Ref, ref } from 'vue'

defineProps<{ msg: string }>()

const board: Ref<number[][]> = ref([])
const boardSize = ref(10)
const velocity = ref({
  vx: 1,
  vy: 0
})

const snakeLength = ref(5)
const snakePosition = ref({
  px: 3,
  py: 3
})

const snake: Ref<{ px: number; py: number }[]> = ref([])

for (let i = 0; i < snakeLength.value; i++) {
  snake.value.push({ px: 3 + i, py: 3 })
}

setInterval(() => {
  snakePosition.value.px += velocity.value.vx
  snakePosition.value.py += velocity.value.vy
  if (snakePosition.value.px >= boardSize.value) {
    snakePosition.value.px = 0
  }

  if (snakePosition.value.py >= boardSize.value) {
    snakePosition.value.py = 0
  }

  if (snakePosition.value.px < 0) {
    snakePosition.value.px = boardSize.value - 1
  }

  if (snakePosition.value.py < 0) {
    snakePosition.value.py = boardSize.value - 1
  }
  const boardTemp = []
  for (let i = 0; i < boardSize.value; i++) {
    const rowTemp = []
    for (let j = 0; j < boardSize.value; j++) {
      // let isSnake = false
      // for (let snakePos of snake.value) {
      //   if (snakePos.px === j && snakePos.py === i) {
      //     isSnake = true
      //   }
      // }
      // if (isSnake) {
      //   rowTemp.push(1)
      // } else {
      //   rowTemp.push(0)
      // }
      if (snakePosition.value.px === j && snakePosition.value.py === i) {
        rowTemp.push(1)
      } else {
        rowTemp.push(0)
      }
    }
    boardTemp.push(rowTemp)
  }
  board.value = boardTemp
}, 100)

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'a':
      if (velocity.value.vx !== 1) {
        velocity.value = {
          vx: -1,
          vy: 0
        }
      }

      return
    case 's':
      if (velocity.value.vy !== -1) {
        velocity.value = {
          vx: 0,
          vy: 1
        }
      }
      return
    case 'w':
      if (velocity.value.vy !== 1) {
        velocity.value = {
          vx: 0,
          vy: -1
        }
      }
      return
    case 'd':
      if (velocity.value.vx !== -1) {
        velocity.value = {
          vx: 1,
          vy: 0
        }
      }
      return
  }
  console.log(e)
})
</script>

<template>
  <button @click="boardSize--">-</button>
  <button @click="boardSize++">+</button>
  <div v-for="row in board" class="board">
    <div v-for="cell in row">
      <div v-if="cell === 0" class="cell"></div>
      <div v-else class="snake"></div>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: flex;
}
.cell {
  height: 30px;
  width: 30px;
  border: 1px solid black;
}
.snake {
  height: 30px;
  width: 30px;
  background-color: green;
  border: 1px solid black;
}
button {
  font-size: 1.5rem;
  height: 40px;
  margin: 10px;
  width: 40px;
}
</style>
