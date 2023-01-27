// function Calculator() {
//     this.total = 0;
//     this.add = function (num) {
//         this.total =  this.total + num;
//         return this.total;
//     };
//     this.subtract = function (num) {
//         this.total =  this.total - num;
//         return this.total;
//     }
// }

// calc1 = new Calculator();
// calc1.add(10);
// calc1.add(500);
// calc1.subtract(200);

// calc2 = new Calculator();

// console.log(calc1.total);
// console.log(calc2.total);
function operation(num){

document.getElementById('btn_num_1').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '1'
});
document.getElementById('btn_num_2').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '2'
});
document.getElementById('btn_num_3').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '3'
});
document.getElementById('btn_num_4').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '4'
});
document.getElementById('btn_num_5').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '5'
});
document.getElementById('btn_num_6').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '6'
});
document.getElementById('btn_num_7').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '7'
});
document.getElementById('btn_num_8').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '8'
});
document.getElementById('btn_num_9').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '9'
});
document.getElementById('btn_num_0').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '0'
});
document.getElementById('btn_mul').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '*'
});
document.getElementById('btn_div').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '/'
});
document.getElementById('btn_add').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '+'
});
document.getElementById('btn_sub').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '-'
});
document.getElementById('btn_dec').addEventListener("click",  _=>{
    document.getElementById('display-box').innerText += '.'
});
}
operation()


document.getElementById('btn_clear').addEventListener('click',_=>{
    document.getElementById('display-box').innerHTML='0'
})

document.getElementById('btn_total').addEventListener('click',_=>{
    let total = eval(document.getElementById('display-box').innerHTML)
   document.getElementById('display-box').innerText = total

})