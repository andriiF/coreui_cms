<template>
    <div>
        <CProgress class="mb-3 progress-load-bar">
            <CProgressBar :value="50" class="bg-success"/>
        </CProgress>
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

</script>
<style lang="scss">
.progress-load-bar {
    height: 4px;
}
</style>

