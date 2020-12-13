import './reactApp.jsx';
import './test.vue';
import './../stylesheets/main.scss';
import Vue, { FunctionalRenderContext } from 'vue/dist/vue.js';


// let app = new Vue({
//   el: "#app",
//   data: {
//     message: "赤文字で警告します",
//     error_class: "error"
//   }
// });

//- transition（v-enter, v-enter-to, v-enter-active）
// var app = new Vue({
//   el: "#app",
//   data: {
//     message: "Vue.jsを勉強しています"
//   }
// });

//- v-model
// var app = new Vue ({
//   el: "#app",
//   data: {
//     number: 999
//   }
// });

//- v-if
// const today = new Date();
// let hour = today.getHours();

// var app = new Vue ({
//   el: "#app",
//   data: {
//     out_service: (hour > 18),
//   }
// });

//- v-for
// var app = new Vue ({
//   el: "#app"
// });

//- v-for dataの中から
// var app = new Vue ({
//   el: "#app",
//   data: {
//     weeks: ['日','月','火','水','木','金','土']
//   }
// });

//- v-on methods
// var app = new Vue ({
//   el: "#app",
//   data: {
//     clicked: false
//   },
//   methods: {
//     checkClick: function() {
//       this.clicked = true
//     },
//   }
// });

//- Vue.component
// Vue.component('date', {
//   data: function() {
//     return {
//       today: ''
//     }
//   },
//   mounted: function() {
//     const now = new Date();
//     this.today = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`
//   },
//   template: '<div>{{ today }}</div>'
// });

// var app = new Vue ({
//   el: "#app",
// });

// slot
// Vue.component('clock', {
//   data: function () {
//     return {
//       time: '12:43:56'
//     }
//   },
//   mounted: function () {
//     let timerID = setInterval(this.refresh, 500);
//   },
//   methods: {
//     refresh: function () {
//       let now = new Date();
//       this.time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
//     }
//   },
//   template: '<div :style=""><h2><slot>時計</slot></h2>{{ time }}</div>'
// });

// var app = new Vue({
//   el: "#app"
// });

// var Util = {
//   methods: {
//     addZero: function(value) {
//       if (value < 10) {
//         return '0' + value
//       } else {
//         return value
//       }
//     }
//   }
// }
// var app = new Vue ({
//   el: "#app",
//   data: {
//     number: 1
//   },
//   mounted: function() {
//     this.number = this.addZero(this.number)
//   },
//   mixins: [Util]
// });


var app = new Vue ({
  el: "#app",
  data: {
    num1: 0,
    num2: 0,
  },
  computed : {
    answer: function() {
      return this.num1 + this.num2;
    },
    done: function() {
      return (this.num1 !== 0 && this.num2 !== 0);
    }
  }
});
