import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)
  const inc = (n: number = 1) => {
    count.value += n
  }
  const dec = (n: number = 1) => {
    count.value -= n
  }
  const set = (n: number) => {
    count.value = n
  }
  const reset = () => {
    count.value = 0
  }

  return {
    count,
    inc,
    dec,
    set,
    reset,
  }
}
