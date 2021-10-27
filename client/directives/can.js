export default (app) => {
    app.directive('can', {
        mounted(el, binding, vnode) {
            el.style.visibility = !app.config.globalProperties.$can(binding.value, false) ? "hidden" : "";
        }
    })
}
