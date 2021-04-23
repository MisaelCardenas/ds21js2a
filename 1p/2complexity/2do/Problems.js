//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm
<script>
    let 1num=prompt();
     2num=prompt(),i=2,lcm=1;
    while(i<1num || i<2num)
    {
        if (1num%i==0 || 2num%i==0)
        {
            lcm=lcm*i;
            if(1num%i==o)1num=1num/i;
            if(2num%i==0)2num=2num/i;
        }
        else i=i+1;
    }
    console.log("lcm" + lcm);
</script>




//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements
<script>
let a = 50;
let b = 2;
let numerosb = [];
for (; b < a; b++) 
{
  if (primo(b)) {
    numerosP.push(p);
  }
}
console.log(numerosb);
function primo(numero) 
{
  for (let i = 2; i < numero; i++) 
  {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}
</script>




//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]
<script>
    function aleatorio()
{
    let  n=Math.random()*10;
    return Math.floor (1-n);
}
let n=aleatorio();
console.log(a);
</script>




