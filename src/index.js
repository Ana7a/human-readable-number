module.exports = function toReadable (number) {
     const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    if (number === 0) {
      return 'zero';
    }
  
    const numString = number.toString();
  
    if (number < 10) {
      return ones[number];
    }else if (number < 20) {
      return teens[number - 10];
    }else if (number < 100) {
      return `${tens[Math.floor(number / 10)]} ${ones[number % 10]}`.trim();
    }else if (number < 1000) {
      if(number===100 || number===200 || number===300 || number===400 || number===500 || number===600 || number===700 || number===800 || number===900){
        return `${ones[Math.floor(number / 100)]} hundred`.trim();
      }else{
        return `${ones[Math.floor(number / 100)]} hundred ${toReadable(number % 100)}`.trim();
      }
    }else if (number < 1000000) {
      return `${toReadable(Math.floor(number / 1000))} thousand ${toReadable(number % 1000)}`.trim();
    }else if (number < 1000000000) {
      return `${toReadable(Math.floor(number / 1000000))} million ${toReadable(number % 1000000)}`.trim();
    }
}
