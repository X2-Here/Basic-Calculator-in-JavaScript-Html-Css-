let n1 = document.getElementById('in1');
let n2 = document.getElementById('in2');
const plus = document.getElementById('plus');
const min = document.getElementById('min');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
let temp;
let ALU;
plus.addEventListener('click',() =>{
    temp = parseInt(n2.value);
    console.log(temp);
    n1.innerHTML = n2.value + '+';
    n2.innerHTML='';
    n2.value = '';
    ALU = 'plus';
});
min.addEventListener('click', ()=>{
    temp = parseInt(n2.value);
    console.log(temp);
    n1.innerHTML = n2.value + '-';
    n2.innerHTML='';
    n2.value = '';
    ALU ='minus';
});

mul.addEventListener('click', ()=>{
    temp = parseInt(n2.value);
    console.log(temp);
    n1.innerHTML = n2.value + '*';
    n2.innerHTML='';
    n2.value = '';
    ALU ='multiply';
});

div.addEventListener('click', ()=>{
    temp = parseInt(n2.value);
    console.log(temp);
    n1.innerHTML = n2.value + '/';
    n2.innerHTML='';
    n2.value = '';
    ALU ='divide';
});
 document.getElementById('equal').addEventListener("click", () => {
  equal(ALU);
});
function equal(val){
   if(val =='plus'){
    let sum = temp+parseInt(n2.value);
    n1.innerHTML = '';
    n2.value=sum;
   }
   else if(val=='minus'){
    let sum = temp-parseInt(n2.value);
    n1.innerHTML = '';
    n2.value=sum;
   }
   else if(val=='multiply'){
    let sum = temp*parseInt(n2.value);
    n1.innerHTML = '';
    n2.value=sum;
   }
   else if(val=='divide'){
    let sum = temp/parseInt(n2.value);
    n1.innerHTML = '';
    n2.value=sum;
   }
   else{
    console.log('error');
   }
};
document.querySelectorAll(".sel").forEach((ele)=>{
    ele.addEventListener('click', ()=>{
        n2.value += ele.innerText;
    })
});

document.getElementById("clear").addEventListener("click",()=>{
    n1.innerHTML = '';
    n2.value = '';
});