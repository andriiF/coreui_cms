<template>
    <router-link to="/profile">
        <CAvatar :src="avatar" size="md" v-if="avatar"/>
        <div v-else style="">
            Profil
        </div>
    </router-link>
</template>

<script>
import avatar from '@/admin/assets/images/avatars/8.jpg'
import {useStore} from "vuex";
import {computed} from "vue";


export default {
    name: 'AppHeaderDropdownAccnt',
    setup() {
        const store = useStore()
        return {
            avatar: computed(() => store.getters.user.avatar),
        }
    },
}
</script>
