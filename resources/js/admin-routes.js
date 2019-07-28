/**
 * Created by NIRJHAR on 7/28/2019.
 */
import adminhome from './admin-components/adminhome.vue'
import exampleComponent from './admin-components/ExampleComponent.vue'
export const routes = [
    { path: '/home',  component: adminhome },
    { path: '/post',  component: exampleComponent }
]