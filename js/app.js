let date = new Date();
let x = date.getHours();
if(x>=6 && x<12){
    document.body.style.backgroundColor='yellow';
    alert('Sabahınız Xeyir');
}
else if(x>=12 && x<18){
    document.body.style.backgroundColor='orange';
    alert('Günortanız Xeyir');
}
else if(x>=18 && x<24){
    document.body.style.backgroundColor='blue';
    alert('Axşamınız Xeyir');
}
else{
    document.body.style.backgroundColor='dark';
    alert('Gecəniz Xeyrə');
}