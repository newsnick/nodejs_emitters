const target = new EventTarget()

console.log(target)

const logTarget = () => {
  console.log('Connected to target')
}

target.addEventListener('connect', logTarget)
target.dispatchEvent(new Event('connect'))
target.removeEventListener('connect')
