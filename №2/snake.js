const w = 19;
const h = 5;

const result = new Array(h).fill().map(()=> new Array(w).fill(""));

let counter = 1;



main: for(let n = 0;;n++) { 

    for (let i = n; i<=w-1-n; i++) {
        const wArr = result[n];
        

        if(typeof(wArr[i]) == "number") {
            break main;
        }
        wArr[i] = counter;
        counter++;
 
    }

    for (let j = n+1; j<=h-n-1; j++) {
        const hArr = result;

        if(typeof(hArr[j][w-n-1]) == "number") {
            break main;
        }
        hArr[j][w-n-1] = counter;
        counter++;
    }
    
    for (let i = w-2-n; i>=n; i--) {
        const wArr = result[h-1-n];

        if(typeof(wArr[i]) == "number") {
            break main;
        }
        wArr[i] = counter;
        counter++;

    }
    
    for (let j=h-2-n; j>=1+n; j--) {
        const hArr = result;

        if(typeof(hArr[j][n]) == "number") {
            break main;
        }
        hArr[j][n] = counter;
        counter++;

    }

 


    // break;
}


console.log(result);


