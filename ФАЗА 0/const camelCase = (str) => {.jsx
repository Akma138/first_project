const camelCase = (str) => {
  str = str.split("_")
  console.log(str[1][0].toUpperCase())
  str[1] = str[1][0].toUpperCase() + str[1].slice(1);
  return str.join("")
}

module.exports = camelCase

const logEachLetter = (str) => {
  for (let i = 0; i < str.length; i++) {
      console.log(str[i])
  }
}
  
module.exports = logEachLetter


const longestString = (arr) => {
  max = 0;
  lng = "";
  for (i of arr) {
      if (i.length > max) {
          max = i.length;
          lng = i;
      }
  }
  return lng
}

module.exports = longestString

const nestedArr = (arr, number) => {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] == number) {
              return i
          }
      }
  }

}

module.exports = nestedArr

const objValue = (obj, key) => {
  return obj[key]
}
   
module.exports = objValue


const randomArr = () => {
  let arr = []
  for (let i = 0; i < 10; i++) {
      arr.append(Math.trunc(Math.random() * 10))
  }
  return arr
}
  
module.exports = randomArr


const sumOfIntegers = (start, end) => {
  sum = 0
  for (let i = start+1; i < end; i++) {
      sum += i
  }
  return sum
}

module.exports = sumOfIntegers

const objValue = (obj, key) => {
  return obj[key]
}
   
module.exports = objValue
