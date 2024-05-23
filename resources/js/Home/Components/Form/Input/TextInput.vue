<template>
    <div class="relative mb-6" data-te-input-wrapper-init>
        <input
            :type="type"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :readonly="readonly"
            :disabled="disabled"
            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear border-2 "
            :autocomplete="autocomplete"
            :placeholder="placeholder"/>
        <label
            for="exampleFormControlInput3"
            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.15rem] scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary bg-white"
        >{{ label }}
        </label>

        <div v-if="errors">
            <p class="text-red-600" v-for="err in errors">{{ err }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
        modelValue: String,
        label: String,
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        errors: {
            type: [String, Array],
            default: ''
        }

    }
);

defineEmits(['update:modelValue']);

</script>
