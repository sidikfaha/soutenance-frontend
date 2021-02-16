import Vue from "vue"
import {
  BRow,
  BCol,
  BContainer,
  ListGroupPlugin,
  IconsPlugin,
  FormPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormCheckboxPlugin,
  ButtonPlugin,
} from "bootstrap-vue"

// Bootstrap-vue components injection
Vue.component('b-row', BRow)
Vue.component('b-col', BCol)
Vue.component('b-container', BContainer)

// Bootstrap-vue plugins injection
Vue.use(IconsPlugin)
Vue.use(ListGroupPlugin)
Vue.use(FormPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormCheckboxPlugin)
Vue.use(ButtonPlugin)
