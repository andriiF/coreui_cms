<template>
    <CCol :xs="12">
        <CCard class="mb-4">
            <CCardHeader>
                <strong>Profil</strong>
            </CCardHeader>
            <ul class="nav nav-tabs mt-4 ps-2" role="navigation">
                <li class="nav-item">
                    <a class="active nav-link" aria-current="page" href="#" @click.prevent>Dane</a></li>
            </ul>
            <CCardBody>
                <CForm class="row g-3">
                    <CCol :md="6">
                        <CFormLabel>Nazwa</CFormLabel>
                        <CFormInput type="text" v-model="form.name" :class="{'error':form.errors.name}"/>
                        <ErrorMessage :message="form.errors.name"/>
                    </CCol>
                    <CCol :md="6">
                        <CFormLabel>E-mail</CFormLabel>
                        <CFormInput type="e-mail" v-model="form.email" :class="{'error':form.errors.email}"/>
                        <ErrorMessage :message="form.errors.email"/>
                    </CCol>
                    <CCol :xs="12" class="mt-5">
                        <CButton type="button" color="primary" @click="save">Zapisz</CButton>
                    </CCol>
                </CForm>
            </CCardBody>
        </CCard>
    </CCol>
</template>

<script setup>

import {useStore} from "vuex";
import axios from "axios";
import {ref} from "vue";
import ErrorMessage from "@/admin/components/tools/ErrorMessage";
import {easyForm} from "../../libraries/form/Form";
// import easyForm  from "@/admin/libraries"

const store = useStore()
const user = store.getters.user;
const errors = ref({});

const form = easyForm(store.getters.user);

const save = () => {
    form.post(route('profile.update', {id: user.id}), {
        onSuccess: (r) => {
        },
    })
}
</script>
