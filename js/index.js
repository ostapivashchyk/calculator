function insert(num){
    document.form.textview.value =
    document.form.textview.value + num;
}

function clean(){
    document.form.textview.value = "";
}

function equal(){
    const number = document.form.textview.value
    document.form.textview.value = eval(number);
}