function click(n) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('active');
        paras[i].classList.remove('active');
    }

    inputs[n].classList.add('active');
    document.getElementById('description' + n).classList.add('active');
}

const inputs = document.getElementsByClassName('input');
const paras = document.getElementsByClassName('description');

click(0);

let input0 = document.getElementById('input0');
input0.onclick = function() {
    click(0);
}

let input1 = document.getElementById('input1');
input1.onclick = function() {
    click(1);
}

let input2 = document.getElementById('input2');
input2.onclick = function() {
    click(2);
}

let input3 = document.getElementById('input3');
input3.onclick = function() {
    click(3);
}

let input4 = document.getElementById('input4');
input4.onclick = function() {
    click(4);
}

let input5 = document.getElementById('input5');
input5.onclick = function() {
    click(5);
}

let input6 = document.getElementById('input6');
input6.onclick = function() {
    click(6);
}

let input7 = document.getElementById('input7');
input7.onclick = function() {
    click(7);
}

let input8 = document.getElementById('input8');
input8.onclick = function() {
    click(8);
}

let input9 = document.getElementById('input9');
input9.onclick = function() {
    click(9);
}
