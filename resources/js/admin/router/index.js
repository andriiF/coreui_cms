import {h, resolveComponent} from 'vue'
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

import DefaultLayout from '@/admin/layouts/DefaultLayout.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: DefaultLayout,
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () =>
                    import(/* webpackChunkName: "dashboard" */ '@/admin/views/Dashboard.vue'),
            },
            {
                path: '/profile',
                name: 'Profil',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/admin/views/profile/Profile.vue'),
            },


            {
                path: '/theme',
                name: 'Theme',
                redirect: '/theme/typography',
            },
            {
                path: '/theme/colors',
                name: 'Colors',
                component: () => import('@/admin/views/theme/Colors.vue'),
            },
            {
                path: '/theme/typography',
                name: 'Typography',
                component: () => import('@/admin/views/theme/Typography.vue'),
            },
            {
                path: '/base',
                name: 'Base',
                component: {
                    render() {
                        return h(resolveComponent('router-view'))
                    },
                },
                redirect: '/base/breadcrumbs',
                children: [
                    {
                        path: '/base/accordion',
                        name: 'Accordion',
                        component: () => import('@/admin/views/base/Accordion.vue'),

                    },
                    {
                        path: '/base/breadcrumbs',
                        name: 'Breadcrumbs',
                        component: () => import('@/admin/views/base/Breadcrumbs.vue'),
                    },
                    {
                        path: '/base/breadcrumbs',
                        name: 'Breadcrumbs',
                        component: () => import('@/admin/views/base/Breadcrumbs.vue'),
                    },
                    {
                        path: '/base/cards',
                        name: 'Cards',
                        component: () => import('@/admin/views/base/Cards.vue'),
                    },
                    {
                        path: '/base/carousels',
                        name: 'Carousels',
                        component: () => import('@/admin/views/base/Carousels.vue'),
                    },
                    {
                        path: '/base/collapses',
                        name: 'Collapses',
                        component: () => import('@/admin/views/base/Collapses.vue'),
                    },
                    {
                        path: '/base/list-groups',
                        name: 'List Groups',
                        component: () => import('@/admin/views/base/ListGroups.vue'),
                    },
                    {
                        path: '/base/navs',
                        name: 'Navs',
                        component: () => import('@/admin/views/base/Navs.vue'),
                    },
                    {
                        path: '/base/paginations',
                        name: 'Paginations',
                        component: () => import('@/admin/views/base/Paginations.vue'),
                    },
                    {
                        path: '/base/placeholders',
                        name: 'Placeholders',
                        component: () => import('@/admin/views/base/Placeholders.vue'),
                    },
                    {
                        path: '/base/popovers',
                        name: 'Popovers',
                        component: () => import('@/admin/views/base/Popovers.vue'),
                    },
                    {
                        path: '/base/progress',
                        name: 'Progress',
                        component: () => import('@/admin/views/base/Progress.vue'),
                    },
                    {
                        path: '/base/spinners',
                        name: 'Spinners',
                        component: () => import('@/admin/views/base/Spinners.vue'),
                    },
                    {
                        path: '/base/tables',
                        name: 'Tables',
                        component: () => import('@/admin/views/base/Tables.vue'),
                    },
                    {
                        path: '/base/tooltips',
                        name: 'Tooltips',
                        component: () => import('@/admin/views/base/Tooltips.vue'),
                    },
                ],
            },
            {
                path: '/buttons',
                name: 'Buttons',
                component: {
                    render() {
                        return h(resolveComponent('router-view'))
                    },
                },
                redirect: '/buttons/standard-buttons',
                children: [
                    {
                        path: '/buttons/standard-buttons',
                        name: 'Buttons',
                        component: () => import('@/admin/views/buttons/Buttons.vue'),
                    },
                    {
                        path: '/buttons/dropdowns',
                        name: 'Dropdowns',
                        component: () => import('@/admin/views/buttons/Dropdowns.vue'),
                    },
                    {
                        path: '/buttons/button-groups',
                        name: 'Button Groups',
                        component: () => import('@/admin/views/buttons/ButtonGroups.vue'),
                    },
                ],
            },
            {
                path: '/forms',
                name: 'Forms',
                component: {
                    render() {
                        return h(resolveComponent('router-view'))
                    },
                },
                redirect: '/forms/form-control',
                children: [
                    {
                        path: '/forms/form-control',
                        name: 'Form Control',
                        component: () => import('@/admin/views/forms/FormControl.vue'),
                    },
                    {
                        path: '/forms/select',
                        name: 'Select',
                        component: () => import('@/admin/views/forms/Select.vue'),
                    },
                    {
                        path: '/forms/checks-radios',
                        name: 'Checks & Radios',
                        component: () => import('@/admin/views/forms/ChecksRadios.vue'),
                    },
                    {
                        path: '/forms/range',
                        name: 'Range',
                        component: () => import('@/admin/views/forms/Range.vue'),
                    },
                    {
                        path: '/forms/input-group',
                        name: 'Input Group',
                        component: () => import('@/admin/views/forms/InputGroup.vue'),
                    },
                    {
                        path: '/forms/floating-labels',
                        name: 'Floating Labels',
                        component: () => import('@/admin/views/forms/FloatingLabels.vue'),
                    },
                    {
                        path: '/forms/layout',
                        name: 'Layout',
                        component: () => import('@/admin/views/forms/Layout.vue'),
                    },
                    {
                        path: '/forms/validation',
                        name: 'Validation',
                        component: () => import('@/admin/views/forms/Validation.vue'),
                    },
                ],
            },
            {
                path: '/charts',
                name: 'Charts',
                component: () => import('@/admin/views/charts/Charts.vue'),
            },
            {
                path: '/icons',
                name: 'Icons',
                component: {
                    render() {
                        return h(resolveComponent('router-view'))
                    },
                },
                redirect: '/icons/coreui-icons',
                children: [
                    {
                        path: '/icons/coreui-icons',
                        name: 'CoreUI Icons',
                        component: () => import('@/admin/views/icons/CoreUIIcons.vue'),
                    },
                    {
                        path: '/icons/brands',
                        name: 'Brands',
                        component: () => import('@/admin/views/icons/Brands.vue'),
                    },
                    {
                        path: '/icons/flags',
                        name: 'Flags',
                        component: () => import('@/admin/views/icons/Flags.vue'),
                    },
                ],
            },
            {
                path: '/notifications',
                name: 'Notifications',
                component: {
                    render() {
                        return h(resolveComponent('router-view'))
                    },
                },
                redirect: '/notifications/alerts',
                children: [
                    {
                        path: '/notifications/alerts',
                        name: 'Alerts',
                        component: () => import('@/admin/views/notifications/Alerts.vue'),
                    },
                    {
                        path: '/notifications/badges',
                        name: 'Badges',
                        component: () => import('@/admin/views/notifications/Badges.vue'),
                    },
                    {
                        path: '/notifications/modals',
                        name: 'Modals',
                        component: () => import('@/admin/views/notifications/Modals.vue'),
                    },
                ],
            },
            {
                path: '/widgets',
                name: 'Widgets',
                component: () => import('@/admin/views/widgets/Widgets.vue'),
            },
        ],
    },
    {
        path: '/pages',
        redirect: '/pages/404',
        name: 'Pages',
        component: {
            render() {
                return h(resolveComponent('router-view'))
            },
        },
        children: [
            {
                path: '404',
                name: 'Page404',
                component: () => import('@/admin/views/pages/Page404'),
            },
            {
                path: '500',
                name: 'Page500',
                component: () => import('@/admin/views/pages/Page500'),
            },
            {
                path: 'login',
                name: 'Login',
                component: () => import('@/admin/views/pages/Login'),
            },
            {
                path: 'register',
                name: 'Register',
                component: () => import('@/admin/views/pages/Register'),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)",
        name: 'Register',
        component: () => import('@/admin/views/pages/Page404'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        // always scroll to top
        return {top: 0}
    },
})

export default router
