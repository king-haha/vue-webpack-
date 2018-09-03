<!--  以后项目的根组件 -->

<!-- template主要放html元素的（html的页面结构） -->
<template>
  <div>
    <span class="red">hello vue.js!!!！！！！！{{msg}}</span><br>
    <router-link to="/login">登录</router-link> |
    <router-link to="/register">注册</router-link>
    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- 使用 mint-ui 中的 button 组件 -->
    <mt-button @click="add(3,2);" size="large" type="danger">danger</mt-button>
    <mt-button @click="tip()" size="large" type="primary">primary</mt-button>

    <!-- 使用mui的九宫格 -->
    <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div></a></li>
        </ul>
    </div>
    <!-- mui图文列表 -->
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="./imgs/cbd.jpg">
                <div class="mui-media-body">
                    幸福
                    <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                </div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="./imgs/cbd.jpg">
                <div class="mui-media-body">
                    木屋
                    <p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
                </div>
            </a>
        </li>
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-object mui-pull-left" src="./imgs/cbd.jpg">
                <div class="mui-media-body">
                    CBD
                    <p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
                </div>
            </a>
        </li>
    </ul>


  </div>
</template>

<script>
// 导入 miu-ui 中的 js component 组件，这种组件只能在哪里用在哪里导入
import { Toast } from "mint-ui";

// 定义一个 add 方法
function add(x, y) {
  console.log(x + y);
}
// 负责导出.vue这个组件对象（本质上是一个vue的对象，所以vue中该定义的元素都可以使用）
export default {
  data() {
    return {
      msg: "hel卡时间打多久ouejs甲磺酸"
    };
  },
  methods: {
    add,
    tip: function() {
      Toast("你好!!");
    }
  },
  created() {}
};
</script>

<style scoped>
/* 当前css页面的css样式写到这里，其中 scoped 表示这个style标签里面的演示只在当前这个页面中有效，不回去影响到其他组件页面 */
.red {
  color: red;
}
</style>
