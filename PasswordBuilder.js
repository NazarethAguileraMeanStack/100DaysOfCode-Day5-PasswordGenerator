class PasswordBuilder {
    constructor() {}
    lookup = {
        "1": "a",
        "2": "b",
        "3": "c",
        "4": "d",
        "5": "e",
        "6": "f",
        "7": "g",
        "8": "h",
        "9": "i",
        "10": "j",
        "11": "k",
        "12": "l",
        "13": "m",
        "14": "n",
        "15": "o",
        "16": "p",
        "17": "q",
        "18": "r",
        "19": "s",
        "20": "t",
        "21": "u",
        "22": "v",
        "23": "w",
        "24": "x",
        "25": "y",
        "26": "z",
        "101": "!",
        "102": "@",
        "103": "#",
        "104": "$",
        "105": "%",
        "106": "^",
        "107": "&",
        "108": "*",
        "109": ".", 
    };
    generateCharacters(numOfCharacters) {
        let chars = [];
        for (let i = 0; i < numOfCharacters; i++) {
          let val = Math.floor(Math.random() * 26) + 1;
          let isUpperCase = Math.floor(Math.random() * 2);
          let char = this.lookup[val];
          if (isUpperCase) char = char.toUpperCase();
          chars.push(char);  
        }
        return chars;
    }

    generateSymbols(numOfSymbols) {
        let symbols = [];
        for (let i = 0; i < numOfSymbols; i++) {
            let val = Math.floor(Math.random() * 9) + 100;
            let symbol = this.lookup[val];
            symbols.push(symbol);
        }
        return symbols;
    }

    generateNumbers(numOfNumbers) {
        let nums = [];
        for (let i = 0; i < numOfNumbers; i++) {
            let val = Math.floor(Math.random() * 9) + 1;
            let strNum = val.toString();
            nums.push(strNum);
        }
        return nums;
    }

    shuffle(arr, n) {
        for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    
}

module.exports = PasswordBuilder;