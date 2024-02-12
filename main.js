export const fn = (a, b, c) => {
   let pollo = a;
   let carne = b;
   let vegetariana = c;
   let resultado = 0;
   let numeroPagar = 0;

   // PRIMERA CONDICION. Nº EMPANADAS DIVISIBLE ENTRE 3
   if (((vegetariana + carne + pollo) % 3) != 0) {

      throwError;
   }

   // SEGUNDA CONDICION. Nº EMPANADAS MENOR DE 40
   if ((vegetariana + carne + pollo) > 40) {

      throwError;
   }

   // TERCERA CONDICION. Nº EMPANADAS NUMEROS POSITIVOS
   if ((vegetariana < 0) || (carne < 0) || (pollo < 0)) {

      throwError;
   }

   //Nº TOTAL DE EMPANADILLAS QUE SE VAN A PAGAR
   numeroPagar = (vegetariana + carne + pollo) / 3;



   //CASO EMPANADILLAS A/C HABIENDO B (2,1,6)
   while ((vegetariana > 0) && (pollo > 0) && (carne > 0) && (numeroPagar != 0)) {
      resultado += 14;

      vegetariana = vegetariana - 1
      pollo = pollo - 1
      carne = carne - 1

      numeroPagar--;
   }

   // //CASO EMPANADILLAS B/C HABIENDO A (NO ENTRA NUNCA PERO LO DEJO PARA QUE SE VEAN TODAS LAS COMBINACIONES)
   // while ((vegetariana > 0) && (carne > 0) && (pollo > 0) && (numeroPagar != 0)) {
   //    resultado += 16;

   //    vegetariana = vegetariana - 1
   //    pollo = pollo - 1
   //    carne = carne - 1

   //    numeroPagar--;
   // }

   // //CASO EMPANADILLAS A/B HABIENDO C (NO ENTRA NUNCA PERO LO DEJO PARA QUE SE VEAN TODAS LAS COMBINACIONES)
   // while ((pollo > 0) && (carne > 0) && (vegetariana > 0) && (numeroPagar != 0)) {
   //    resultado += 13;

   //    vegetariana = vegetariana - 1
   //    pollo = pollo - 1
   //    carne = carne - 1

   //    numeroPagar--;
   // }

   //CASO EMPANADILLAS A/C SIN HABER B
   while ((vegetariana > 0) && (pollo > 0) && (numeroPagar != 0)) {
      console.log("Holaaaa")

      if (vegetariana > pollo) {
         if (pollo >= 3) {
            if ((pollo * 2) % 3 === 0) {
               resultado += ((pollo * 2) / 3) * 12;
               resultado += ((vegetariana - pollo) / 3) * 14;
               vegetariana = 0;
               pollo = 0;
            } else {
               console.log(resultado)

               resultado += Math.floor((((pollo * 2) - 1) / 3)) * 12;
               console.log(resultado)
               resultado += Math.ceil((vegetariana - pollo) / 3) * 14;
               vegetariana = 0;
               pollo = 0;
            }
         }
         else {
            resultado += 14;
            vegetariana = vegetariana - 1
            pollo = pollo - 1
            pollo = pollo - 1
            numeroPagar--;
         }
      } else {
         if (pollo >= 3) {
            if ((pollo * 2) % 3 === 0) {
               resultado += ((pollo * 2) / 3) * 14;
               resultado += ((vegetariana - pollo) / 3) * 12;
               vegetariana = 0;
               pollo = 0;
            } else {
               resultado += Math.floor((((pollo * 2) - 1) / 3)) * 14;
               resultado += Math.ceil((vegetariana - pollo) / 3) * 12;
               vegetariana = 0;
               pollo = 0;
            }
         } else {
            resultado += 14;
            vegetariana = 0;
            pollo = 0;
            numeroPagar--;
         }
      }
   }

   //CASO EMPANADILLAS B/C SIN HABER A
   while ((vegetariana > 0) && (carne > 0) && (numeroPagar != 0)) {


      if (vegetariana > carne) {
         if (carne >= 3) {
            if ((carne * 2) % 3 === 0) {
               resultado += ((carne * 2) / 3) * 15;
               resultado += ((vegetariana - carne) / 3) * 16;
               vegetariana = 0;
               carne = 0;
            } else {
               console.log(resultado)

               resultado += Math.floor((((carne * 2) - 1) / 3)) * 15;
               console.log(resultado)
               resultado += Math.ceil((vegetariana - carne) / 3) * 16;
               vegetariana = 0;
               carne = 0;
            }
         }
         else {
            resultado += 16;
            vegetariana = vegetariana - 1
            pollo = pollo - 1
            carne = carne - 1
            numeroPagar--;
         }
      } else {
         if (carne >= 3) {
            if ((carne * 2) % 3 === 0) {
               resultado += ((carne * 2) / 3) * 16;
               resultado += ((vegetariana - carne) / 3) * 15;
               vegetariana = 0;
               carne = 0;
            } else {
               resultado += Math.floor((((carne * 2) - 1) / 3)) * 16;
               resultado += Math.ceil((vegetariana - carne) / 3) * 15;
               vegetariana = 0;
               carne = 0;
            }
         } else {
            resultado += 16;
            vegetariana = 0;
            carne = 0;
            numeroPagar--;
         }
      }

   }

   //CASO EMPANADILLAS A/B SIN HABER C
   while ((carne > 0) && (pollo > 0) && (numeroPagar != 0)) {


      if (carne > pollo) {
         if (pollo >= 3) {
            if ((pollo * 2) % 3 === 0) {
               resultado += ((pollo * 2) / 3) * 12;
               resultado += ((carne - pollo) / 3) * 13;
               carne = 0;
               pollo = 0;
            } else {
               console.log(resultado)

               resultado += Math.floor((((pollo * 2) - 1) / 3)) * 12;
               console.log(resultado)
               resultado += Math.ceil((carne - pollo) / 3) * 13;
               carne = 0;
               pollo = 0;
            }
         }
         else {
            resultado += 13;
            carne = carne - 1
            pollo = pollo - 1
            pollo = pollo - 1
            numeroPagar--;
         }
      } else {
         if (pollo >= 3) {
            if ((pollo * 2) % 3 === 0) {
               resultado += ((pollo * 2) / 3) * 13;
               resultado += ((carne - pollo) / 3) * 12;
               carne = 0;
               pollo = 0;
            } else {
               resultado += Math.floor((((pollo * 2) - 1) / 3)) * 13;
               resultado += Math.ceil((carne - pollo) / 3) * 12;
               carne = 0;
               pollo = 0;
            }
         } else {
            resultado += 13;
            carne = 0;
            pollo = 0;
            numeroPagar--;
         }
      }

   }

   // CASO EMPANADILLAS C
   while ((vegetariana > 0) && (numeroPagar != 0)) {
      resultado += 16;

      vegetariana = vegetariana - 1
      pollo = pollo - 1
      carne = carne - 1

      numeroPagar--;
   }

   //CASO EMPANADILLAS B
   while ((carne > 0) && (numeroPagar != 0)) {
      resultado += 14;

      vegetariana = vegetariana - 1
      pollo = pollo - 1
      carne = carne - 1

      numeroPagar--;
   }

   // CASO EMPANADILLAS A
   while ((pollo > 0) && (numeroPagar != 0)) {
      resultado += 12;

      vegetariana = vegetariana - 1
      pollo = pollo - 1
      carne = carne - 1

      numeroPagar--;
   }

   console.log(resultado)
   return resultado;
}

