function calculateMoney(ticketSale) {

    if (typeof ticketSale !== "number" || ticketSale < 0) {
    
    return "Please give a valid number";
    
    }
    
    const ticketPrice = 120;
    
    const guardPayment = 500;
    
    const eachStuffLunchPayment = 50;
    
    const totalStuffPayment = eachStuffLunchPayment * 8;
    
    let remainingMoney =
    
    ticketSale * ticketPrice - (guardPayment + totalStuffPayment);
    
    return remainingMoney;
    
    }
    
    function checkName(name) {
    
    if (typeof name !== "string") {
    
    return "invalid";
    
    }
    
    const vowels = ["a", "e", "i", "o", "u"];
    
    let nameToLower = name.toLowerCase();
    
    let nameLastChar = nameToLower.charAt(nameToLower.length - 1);
    
    for (const vowel of vowels) {
    
    if (nameLastChar === vowel) {
    
    return "Good Name";
    
    }
    
    }
    
    return "Bad Name";
    
    }
    
    function deleteInvalids(array) {
    
    if (!Array.isArray(array)) {
    
    return "You can only give values as array";
    
    }
    
    let value = [];
    
    for (const number of array) {
    
    if (typeof number === "number" && !isNaN(number)) {
    
    value.push(number);
    
    }
    
    }
    
    return value;
    
    }
    
    function password(obj) {
    
    const name = obj.name;
    
    const birthYear = obj.birthYear;
    
    const siteName = obj.siteName;
    
    if (typeof obj !== "object" || !name || !birthYear || !siteName) {
    
    return "invalid";
    
    }
    
    if (typeof name !== "string" || name === "") {
    
    return "invalid";
    
    }
    
    if (typeof birthYear !== "number" || birthYear.toString().length !== 4) {
    
    return "invalid";
    
    }
    
    if (typeof siteName !== "string" || siteName === "") {
    
    return "invalid";
    
    }
    
    let capitalizeSiteName = siteName[0].toUpperCase() + siteName.slice(1);
    
    let generatePassword = `${capitalizeSiteName}#${name}@${birthYear}`;
    
    return generatePassword;
    
    }
    
    function monthlySavings(arr, livingCost) {
    
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
    
    return "invalid input";
    
    }
    
    const gotPayments = [];
    
    for (const array of arr) {
    
    if (array >= 3000) {
    
    const tax = array * 0.2;
    
    const remainingAfterTax = array - tax;
    
    gotPayments.push(remainingAfterTax);
    
    }
    
    if (array < 3000) {
    
    gotPayments.push(array);
    
    }
    
    }
    
    let totalIncome = 0;
    
    for (const sumOfPayment of gotPayments) {
    
    totalIncome = totalIncome + sumOfPayment;
    
    }
    
    const savings = totalIncome - livingCost;
    
    if (savings >= 0) {
    
    return savings;
    
    }
    
    if (savings < 0) {
    
    return "earn more";
    
    }
    
    }