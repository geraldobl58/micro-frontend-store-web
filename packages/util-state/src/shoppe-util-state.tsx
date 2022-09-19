import create from 'zustand'
import { combine } from 'zustand/middleware'

type CartProperties = {
  counter: number
}

type CartMethods = {
  increment: () => void
  decrement: () => void
}

const cart = combine<CartProperties, CartMethods>(
  {
    counter: 0,
  },
  (set) => ({
    increment() {
      .set((state) => {
        return {
          counter: ++state.counter,
        }
      })
    },
    decrement() {
      .set((state) => {
        return {
          counter: --state.counter,
        }
      })
    },
  })
)