import myName from "./myName"

function component() {
  const element = document.createElement('div')
  element.innerHTML = myName('Austin')
  return element
}

document.body.appendChild(component())