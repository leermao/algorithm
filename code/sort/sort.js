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

// 缺点是消耗内存
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

export const quick1 = (arr) => {
  const swap = (arr, a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]]
    return arr
  }

  const findCenter = (arr, left, right) => {
    const flag = arr[left]
    let k = left + 1

    for (let i = k; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, k, i)
        k++
      }
    }
    swap(arr, left, k - 1)

    return k
  }

  const sort = (arr, left, right) => {
    if (left < right) {
      let center = findCenter(arr, left, right)
      sort(arr, left, center - 1)
      sort(arr, center, right)
    }
  }

  sort(arr, 0, arr.length - 1)

  return arr
}
