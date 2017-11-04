export default {
  install(Vue, options){
    Vue.prototype.rem = function (size) {
        return size / 640 * 10 + "rem";
    }
  }
}
