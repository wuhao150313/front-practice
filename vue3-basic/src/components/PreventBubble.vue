v <template>
    <div>
<input @key.enter="submitInput" v-model="inputValue" placeholder="按下
回车提交" />
<p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref<string>('')
const message = ref<string>('尚未提交')

const submitInput = (): void => {
    message.value = `已提交: ${inputValue.value}`
}
</script>

