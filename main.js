function insert(num) {
  var number = document.querySelector('.show').innerHTML
  if (number.length <= 20) {
    document.querySelector('.show').innerHTML = number + num
  }
}

function c() {
  document.querySelector('.show').innerHTML = ''
}

function backspace(num) {
  var result = document.querySelector('.show').innerHTML
  document.querySelector('.show').innerHTML = result.substring(
    0,
    result.length - 1
  )
}
function calc() {
  var sum = document.querySelector('.show').innerHTML

  if (sum) {
    document.querySelector('.show').innerHTML = eval(sum)
  }
}
