function calcular(){
    num1 = Number(document.getElementById('num1').value);
    num2 = Number(document.getElementById('num2').value);
    total = 0;

    if(document.getElementById('box1').checked)
        total = num1 + num2
    else if(document.getElementById('box2').checked)
        total = num1 - num2
    else if(document.getElementById('box3').checked)
        total = num1 * num2
    else
        total = num1 / num2


    document.getElementById('resultado').innerHTML = 'Resultado: ' + String(total);
}