export function isLocalStorageEmpty(name) {
  const item = getInLocalStorage(name)
  if (item == null) return true
  else return false
}

export function setInLocalStorage(name, item) {
  localStorage.setItem(`${name}`, JSON.stringify(item))
}

export function getInLocalStorage(name) {
  return JSON.parse(localStorage.getItem(`${name}`))
}
