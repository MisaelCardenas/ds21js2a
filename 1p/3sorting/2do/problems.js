
//1. bubble - your implementation 
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted
<script>
function numerosaleatorios()
  {
    let a=Math.random()*100;
    return Math.floor(1+a);
  }
let b=[];
for (x=0;x<4;x++)
{
    let nam=numerosaleatorios();
    b[x]=nam; 
}
console.log("numeros "+"<br>"  + b);
    for (let k=1; k < b.length; k++) {
        for (i=0; i<(b.length-k);i++){
            if (d[i]> b [i+1]){
                aux= b [i];
                b[i]=b[i+1];
                b[i+1]=aux;
            }
        }
    }
    console.log("ordenados" + b);
</script>




//2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted

<script>
let num1=[2,4,3,10,7,15,12,9,20];
     console.log(num1);
     let resultado=num1.sort((a,b)=>a-b);
   console.log(resultado);
   </script>




//3. bubble - your implementation 
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted

<script>
let num1=[random + * 4];
function orden_Burbuja(num) { 
    let v= num.length - 1;
    let intercambio;
     
     do{
       intercambio=false;
       for(let i=0;i<v;i++){
       if(num[i]>num[i+1]){
          let temp=num[i];
          num[i]=num[i+1];
          num[i+1]=temp;
          intercambio=true;
         }
         }
         --v;
     }while(intercambio);
     return num; 
}
</script>




//4. sort - use JS Array.sort implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted

<script> 
let num1=[random + * 4];
     console.log(num1);
     let resultado=num1.sort();
   console.log(resultado);
</script>