function checkwordcount(sentence){
    const replacequotes=sentence.replace(',','');
    const splitedarray=replacequotes.split(/\s+/);
    const charwords={};
    
    for (const word of splitedarray) {
        if(!charwords[word]){
            charwords[word]=1;
        }else{
            charwords[word]++;
        }
    }
    console.log(charwords);
}
const sentence = "please please submit your   ,   assignment on time your assignments are important";

checkwordcount(sentence)