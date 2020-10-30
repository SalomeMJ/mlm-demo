export function getUrlParams() {
  const href = window.location.href
  const args = href.split('?')
  const obj = {}
  if (args[0] === href) {
    return
  }

  const arr = args[1].split('&')
  for (const item of arr) {
    const arg = item.split('=')
    obj[arg[0]] = decodeURI(arg[1])
  }
  return obj
}
