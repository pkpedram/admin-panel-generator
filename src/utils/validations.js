const validations = {
    hasSymbols: (input) => {
      let regex =  /[^A-Za-z 0-9]/g;
  
       return regex.test(input)
    },
    nationalCode: (input) => {
      
      var L = input.length;
  
      if (L < 8 || parseInt(input, 10) == 0) return false;
      input = ("0000" + input).substr(L + 4 - 10);
      if (parseInt(input.substr(3, 6), 10) == 0) return false;
      var c = parseInt(input.substr(9, 1), 10);
      var s = 0;
      for (var i = 0; i < 9; i++)
        s += parseInt(input.substr(i, 1), 10) * (10 - i);
      s = s % 11;
      return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
      return true;
   
  },
  onlyNumbers: (input) => {
    var reg = /^\d+$/;
    return reg.test(input)
  },
  phoneNumber: (input) => {
    var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
    return regex.test(input)
  },
  toEnglishDigits: (str) => {

    // convert persian digits [۰۱۲۳۴۵۶۷۸۹]
    var e = '۰'.charCodeAt(0);
    str = str.replace(/[۰-۹]/g, function(t) {
        return t.charCodeAt(0) - e;
    });

    // convert arabic indic digits [٠١٢٣٤٥٦٧٨٩]
    e = '٠'.charCodeAt(0);
    str = str.replace(/[٠-٩]/g, function(t) {
        return t.charCodeAt(0) - e;
    });
    return str;
},
just_persian: (str) => {
  var p = /^[\u0600-\u06FF\s]+$/;

  if (p.test(str)) {
    console.log('hi')
      return true
  }
  return false
}
  };
  export default validations;
  