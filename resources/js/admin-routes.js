/**
 * Created by NIRJHAR on 7/28/2019.
 */
import adminhome from './sample-components/adminhome.vue'
import exampleComponent from './sample-components/ExampleComponent.vue'
import categoryList from './sample-components/categoryList.vue'
export const routes = [
    { path: '/home',  component: adminhome },
    { path: '/post',  component: exampleComponent },
    { path: '/category',  component: categoryList }
]