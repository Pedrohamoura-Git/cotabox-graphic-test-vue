export function isLocalStorageEmpty(name) {
  const item = getInLocalStorage(name)
  console.log('utils - isLocalStorageEmpty - name', name)
  console.log('utils - isLocalStorageEmpty - item', item)
  if (item == null) return true
  else return false
}

export function setInLocalStorage(item, name) {
  localStorage.setItem(`${name}`, JSON.stringify(item))
}

export function getInLocalStorage(name) {
  return JSON.parse(localStorage.getItem(`${name}`))
}
