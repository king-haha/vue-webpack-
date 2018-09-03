// 1. 导入vue核心包

import Vue from 'vue';

// 2. 导入App.vue的vue对象
import App from './App.vue';

// 3. 将vue-router集成到项目中
import vueRouter from 'vue-router';

// 3.1 将 vueRouter 对象绑定到 Vue 对象上
Vue.use(vueRouter);

// 3.2 导入路由规则对应的组件对象
import login from './components/account/login.vue'
import register from './components/account/register.vue'

// 3.3 定义路由规则
let router = new vueRouter({
    routes: [{
        path: '/login',
        component: login
    }, {
        path: '/register',
        component: register
    }]
})

//4. 注册 mint-ui 
// 导入 mint-ui 的 css 文件
import 'mint-ui/lib/style.min.css';
// 导入 mint-ui 组件对象
import mintui from 'mint-ui';
// 在vue 中全局使用mint-ui
Vue.use(mintui);

// 5.注册mui的css样式  mui 不用再次导入  因为mui已经拷贝到statics中了
import  '../statics/mui/css/mui.css';

// 5. 利用Vue对象进行渲染

new Vue({
    el: '#app',
    router, //router:router,  定义的路由规则的名字
    // render: function (create) {
    //     create(App);
    // } // es5 写法
    render: c => c(App) //es6语法
})