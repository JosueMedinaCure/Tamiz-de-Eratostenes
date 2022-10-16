
//               tamiz

const generarPrimos = (num) => {
         if (typeof num === "number" && Number.isInteger(num)) {
             if (num >= 2) {
                 let primos = [];
                 let hayPrimo = [];
                 let iteracion  = 0;
                 for(let i = 1; i <= num + 1; i++) {
                     hayPrimo.push(true);
                     iteracion++;
                 }
     
                 for(let i = 2; i <= num; i++) {
                     if (hayPrimo[i]) {
                         primos.push(i);
                         
     
                         for (let j = 1; j * i <= num; j++) {
                             hayPrimo[i * j] = false;
                             
                         }
                     }iteracion++;
                 }
                 console.log("las iteraciones fueron" + iteracion);
                 return primos;
             } else {
                 throw Error('El número debe ser mayor o igual a 2.');
             }
         } else {
             throw TypeError('El argumento debe ser un número entero.');
         }
     }
         
         document.write(generarPrimos (120) ); 