let wordMap = {
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "10": "Ten",
    "11": "Eleven",
    "12": "Twelve",
    "13": "Thirteen",
    "14": "Fourteen",
    "15": "Fifteen",
    "16": "Sixteen",
    "17": "Seventeen",
    "18": "Eighteen",
    "19": "Nineteen",
    "20": "Twenty",
    "30": "Thirty",
    "40": "Forty",
    "50": "Fifty",
    "60": "Sixty",
    "70": "Seventy",
    "80": "Eighty",
    "90": "Ninety",
    
    }
    
    function numberToWords(num) {
    if (num === 0) {
    return wordMap[num]
    }
    let output = []
    let billion = Math.floor(num / Math.pow(10, 9))
    let million = Math.floor(num % Math.pow(10, 9) / Math.pow(10, 6))
    let thousand = Math.floor(num % Math.pow(10, 6) / Math.pow(10, 3))
    let hundred = num % Math.pow(10, 3)
    
    if (billion > 0) {
        parseHundred(billion, output)
        output.push("Billion")
    }
    if (million > 0) {
        parseHundred(million, output)
        output.push("Million")
    }
    if (thousand > 0) {
        parseHundred(thousand, output)
        output.push("Thousand")
    }
    parseHundred(hundred, output)
    
    return output.join(" ")
    };
    
    function parseHundred(num, output) {
    let hundredsPlace = Math.floor(num / 100)
    let remainder = num % 100
    
    if (hundredsPlace) {
        output.push(wordMap[hundredsPlace])
        output.push("Hundred")
    }
    if (remainder < 20) {
        if (remainder !== 0) {
            output.push(wordMap[remainder])
        }
    } else {
        let onesPlace = remainder % 10
        let tensPlace = remainder - onesPlace
        if (onesPlace !== 0) {
            output.push(wordMap[tensPlace])
            output.push(wordMap[onesPlace])
        } else {
            output.push(wordMap[tensPlace])
        }
    }
    }
    