const calculateExpectedGMV = () => {
  const amount = parseFloat(input.value)
  const now = new Date()
  const currentTime = now.getTime()
  const beginOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime()
  const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59).getTime()

  return amount * (endOfMonth - beginOfMonth) / (currentTime - beginOfMonth)
}

const updateAmount = () => {
  const expectedGMV = calculateExpectedGMV()
  output.innerText = expectedGMV.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })

  setTimeout(updateAmount, 300)
}

const input = document.getElementById('income')
const output = document.getElementById('expected')

updateAmount()
