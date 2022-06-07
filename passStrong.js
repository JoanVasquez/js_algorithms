function SimplePassword(str) {
  //let charCheck = str.length > 7 && str.length < 31;
  if (!str.length > 7 && !str.length < 31) return false;
  if (str.toLowerCase().includes("password")) return false;

  let capitalCheck = /[A-Z]/g.test(str);
  let numberCheck = /[0-9]/g.test(str);
  let passwordCheck = !/password/gi.test(str);
  let punctuationCheck = /[.?!:,;,=,+,-,/]/g.test(str);
  return (
    //charCheck &&
    punctuationCheck && capitalCheck && numberCheck && passwordCheck
  );
}

console.log(SimplePassword("turkey90AAA="));
