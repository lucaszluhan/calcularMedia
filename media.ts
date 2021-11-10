function calcularMedia(numbers: number[], name: string, situacao?: boolean): number {
   let numbs = 0;
   for (let numb of numbers) {
      numbs += numb;
   }
   let media = numbs / numbers.length;
   console.log(`${name}, sua média é: ${media}`);
   if (situacao === true) {
      if (media >= 7) {
         console.log(`${name} aprovado!`);
      } else {
         console.log(`${name} reprovado!`);
      }
   }
   return media;
}
