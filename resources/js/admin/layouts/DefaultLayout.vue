<template>
    <div>
        <CProgress class="mb-3 progress-load-bar" id="progress-load-bar" style="opacity: 0;">
            <CProgressBar :value="0" class="bg-success" id="form-progress"/>
        </CProgress>
        <CAlert id="alert-box" ></CAlert>
        <AppSidebar/>
        <div class="wrapper d-flex flex-column min-vh-100 bg-light">
            <AppHeader/>
            <div class="body flex-grow-1 px-3">
                <CContainer lg>
                    <router-view/>
                </CContainer>
            </div>
            <AppFooter/>
        </div>
    </div>
</template>
<script setup>
import {CContainer} from '@coreui/vue'
import AppFooter from '@/admin/components/AppFooter.vue'
import AppHeader from '@/admin/components/AppHeader.vue'
import AppSidebar from '@/admin/components/AppSidebar.vue'
import {useStore} from "vuex";

const store = useStore()


</script>
<style lang="scss">
#alert-box {
    width: 200px;
    float: right;
    position: fixed;
    right: 0px;
    z-index: 9999;
    bottom: 50px;
}
.progress-load-bar {
    height: 4px;
}
</style>

