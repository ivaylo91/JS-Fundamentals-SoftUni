function checkMissingChar(str,char,result){
    let res = str.replace("_",char);
    let output = res === result ? "Match" : "Not Matched";
    console.log(output);
}

checkMissingChar('Str_ng', 'I', 'Strong');
checkMissingChar('Str_ng', 'i', 'String');