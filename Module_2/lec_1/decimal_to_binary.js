function dectobin(n){
    let sum = 0;
    let res = 0;
    while(n!=0){

        let r = n%2;
        sum = sum * 10 + r
        n = Math.floor(n/2);
    }
    while(sum!=0){
        
        let rem = sum % 10;
        res = res * 10 + rem;
        sum = Math.floor(sum / 10);
    }
    return res;
    

}
let binnum = dectobin(13);
console.log(binnum);