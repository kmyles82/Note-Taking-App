const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

const dariss = new Date('March 7 1986')
const kerry = new Date('April 16 1982')

if (dariss.getFullYear() > kerry.getFullYear()) {
    console.log(`Kerry was born in ${kerry.getFullYear()} and is older than Dariss`)
} else {
    console.log(`Dariss was born in ${dariss.getFullYear()} and is older than Kerry`)
}

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Date: ${now.getDate()}`)
// console.log(`Month: ${now.getMonth() + 1}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

