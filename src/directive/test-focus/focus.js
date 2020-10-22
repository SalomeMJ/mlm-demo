export default {
  bind(el, binding) {
    function test() {
      binding.value.data++
      binding.value.set(binding.value.data)
      console.log(binding.value)
    }
    el.click = test
    document.addEventListener('click', test)
  },
  update(el, binding) {

  },
  unbind(el, binding) {
    document.removeEventListener('click', el.click)
    delete el.click
  }
}
