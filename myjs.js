let input_number=[2,5,7,3,2,8,5,9];
let value=document.getElementById('input').value;
function show(){
    let count=0;
    for(let j=0; j<input_number.length;j++){
        if(value==input_number[j]){
            count+=1;
        }
        else
            count+=0;
    }
    alert(count);
}
function add_number(){
    input_number.push(value);  
    document.getElementById('demo').innerHTML="Mảng hiện tại gồm có: "+input_number;
}

function delete_number(){
    input_number.splice(0,1);
    document.getElementById('demo').innerHTML="Mảng hiện tại gồm có: "+input_number;
}
