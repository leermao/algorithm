export const bubbling = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

export const seletcion = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        let tmp = min
        min = arr[j]
        arr[j] = tmp
      }
    }
    arr[i] = min
  }
  return arr
}

export const quick = (arr) => {
  const quicksort = (arr) => {
    if (arr.length < 2) {
      return arr
    }

    const left = []
    const right = []
    const flag = arr[0]

    for (let index = 1; index < arr.length; index++) {
      if (arr[index] > flag) {
        right.push(arr[index])
      } else {
        left.push(arr[index])
      }
    }

    return quicksort(left).concat(flag, quicksort(right))
  }
  return quicksort(arr)
}
