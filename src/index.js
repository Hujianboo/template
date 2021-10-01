/*
 * @Author: hujianbo
 * @LastEditors: Hujianbo
 */
import Vue from 'vue'
import App from '@/App.vue'
import VueCompositionAPI from '@vue/composition-api'
import './style.css'
Vue.use(VueCompositionAPI)
new Vue({
    el:'#app',
    render: h => h(App),
})
