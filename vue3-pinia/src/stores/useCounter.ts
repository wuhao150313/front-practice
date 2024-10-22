import { defineStore } from 'pinia'

//定义 CounterState 的接口
interface CounterState {
    // 存储计数器的集
    count: number;
}

// 定义一个Store 名为Counter
export const useCounterStore = defineStore('counter', {
    // State: 定义存储的数据
    state: (): CounterState => ({
        count: 0,
    }),

    //Getters 计算属性
    getters: {
        doubleCount: (state: CounterState): number => state.count * 2,
    },

    //定义修改State
    actions: {
        increment() {
            this.count++;
        },

        decrement() {
            this.count--;
        },
    },
});
