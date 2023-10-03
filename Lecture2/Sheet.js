// let a = 0
// let MyDivision = 24 / a
// console.log(MyDivision);

// let mySum = 2 + 6
// console.log(mySum)

// let mySub = 12 - 9
// let num = 9 * (-1)
// console.log(mySub, " \n" ,num)

// let myModulus = 7 % 2
// console.log(myModulus)

// let myVariable = 10
// console.log(myVariable, "\n")
// --myVariable
// console.log(myVariable--, "\n")// after
// console.log(myVariable, "\n")
// // ++myVariable
// console.log(myVariable++, "\n")

// let a = "5"// string
// let b = -10
// let c = "c"
// let C = "C"
// let d = "0"

// console.log(a)
// console.log(a == 5) // true
// console.log(a === 5) // false
// console.log(b)
// console.log(b != "-10") // false
// console.log(b !== "-10") // true
// console.log(c == C) // false
// console.log(c === "c") // true

// let a  = 3
// let b = 7
// let d = -3
// console.log(a > 0) // true
// console.log(b > 0) // true
// console.log(d >= 0) // false
// console.log(d <= 0) // true


// let massaKg = 70
// console.log(massaKg > 50 || massaKg < 90) // true || false = true
// console.log(massaKg < 50 || massaKg < 60) // false || false = false
// console.log(!true) // false
// console.log(!false) // true
// console.log(!(massaKg > 50)) // false

// let a
// let myNum = null
// console.log(myNum,"\n")
// console.log(typeof myNum)
// console.log(typeof a)

// let bool1 = true
// let bool2 = (5 < 9)
// console.log(typeof bool1, '\n', typeof bool2)

// let str = String(7)
// let k = "345"
// let num1 = Number(k)
// console.log(typeof +k)
// console.log(typeof str)
// console.log(typeof num1)

// let word = "doggy"
// console.log(word[4])
// console.log(word.toUpperCase())

// let a = 3
// let result = 5
// // result += a // result = result + a
// console.log(result *= 2)
// // console.log(result)


// let a = 1
// let b = 5

// if (a > b)
// {
// console.log("'a' is bigger than 'b'")
// }
// else if(a == b)
// {
// console.log("'a' is equal to 'b'")    
// }
// else
// {
// console.log("go home")
// }

// let phrase = "Hello World!"; // 1-12 symbols
// let space = '6';
// console.log(phrase.length)
// console.log(space.length)

//____________________ Использовал prompt для операторов if,else, else if_______________________

// let number = prompt("Input number")
// let operator = prompt("1.Concatination + . 2.Reminder % . 3.Multiplication at 5. 4.++ Increment.5.Decrement --. " ) 
// if (operator === "1")
// {
// console.log(number - 15)
// }
// else if (operator === "2")
// {
// console.log(number % 2)    
// }
// else if (operator === "3")
// {
// console.log(number * 5)
// }
// else if (operator === "4")
// {
// console.log(++number)
// // console.log(number) /если декримент стоит после переменной, чтобы убедиться, что работает.
// }
// else if (operator === "5")
// {
// console.log(--number)
// // console.log(number) / если декримент стоит после переменной, чтобы убедиться, что работает.
// }
// else
// {
// console.log(`Operator ${operator} is not apply. Please, tre again!`)
// }

// else{
// alert(`Operator ${operator} is not apply. Please, tre again!`)

// _______________________________________ Продаем Билеты ______________________________________________

// let ticketsAmount = 15
// let fare = 2
// let price = ticketsAmount * fare
// // let discount = null
// let isKids = 1 // 0,NaN,null,"",Underfind, !true
// if (ticketsAmount > 10 && ticketsAmount <= 20)
// {
// console.log("discount 10% " + price *0.9) // цена уже со скидкой. если хочу узнать скидку то * 0.1
// }
// else if (ticketsAmount > 20 && ticketsAmount <= 50)
// {
// console.log("discount 20% " + price *0.8) // цена уже со скидкой. если хочу узнать скидку то * 0.1
// }
// else if (ticketsAmount > 50 && ticketsAmount <= 100 || isKids)
// {
// console.log("discount 30% " + price *0.7) // цена уже со скидкой. если хочу узнать скидку то * 0.1
// }
// else
// {
// console.log(price)    
// }