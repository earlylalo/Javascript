function show() {
    document.getElementById('container').style.display = 'block';
}

function hide() {
    document.getElementById('container').style.display = 'none';
}

function darkMode() {
    document.getElementById('container').style.background = 'rgb(50, 50, 50)';
    document.getElementById('answer').style.color = 'black';
    document.getElementById('container').style.color = 'white';
}

function lightMode() {
    document.getElementById('container').style.background = 'none';
    document.getElementById('container').style.color = '';
}


function answer() {
    let num1 = document.getElementById('num1').value;
    let num2 =  document.getElementById('num2').value;
    let operation = document.getElementById('operation').value;


    if(operation == '+') {
        if((num1 != parseInt(num1)) || (num2 != parseInt(num2))) {
            alert('Invalid Input!');
        }else {
            let answer = parseInt(num1) + parseInt(num2);
            document.getElementById('answer').innerHTML = `<b>Answer is: <u>${num1} + ${num2} = ${answer}<u/><b/>`;
        }
    }
    else if(operation == '-') {
        if((num1 != parseInt(num1)) || (num2 != parseInt(num2))) {
            alert('Invalid Input!');
        }else {
            let answer = parseInt(num1) - parseInt(num2);
            document.getElementById('answer').innerHTML = `<b>Answer is: <u>${num1} - ${num2} = ${answer}<u/><b/>`;
        }
    }
    else if(operation == '*') {
        if((num1 != parseInt(num1)) || (num2 != parseInt(num2))) {
            alert('Invalid Input!');
        }else {
            let answer = parseInt(num1) * parseInt(num2);
            document.getElementById('answer').innerHTML = `<b>Answer is: <u>${num1} * ${num2} = ${answer}<u/><b/>`;
        }
    }
    else if(operation == '/') {
        if((num1 != parseInt(num1)) || (num2 != parseInt(num2))) {
            alert('Invalid Input!');
        }else {
            let answer = parseInt(num1) / parseInt(num2);
            document.getElementById('answer').innerHTML = `<b>Answer is:<u> ${num1} / ${num2} = ${answer}<u/><b/>`;
        }
    }
    else {
        if((num1 != parseInt(num1)) || (num2 != parseInt(num2))) {
            document.getElementById('num1').style.border = '1px solid red';
            document.getElementById('num2').style.border = '1px solid red';
            document.getElementById('operation').style.border = '1px solid red';
            document.getElementById('answer').innerHTML = `<b>Please enter a value!<b/>`;
        }
    }
}

function del() {
    document.getElementById('answer').innerHTML = '<b>Answer is:<b/>';
    
    document.getElementById('num1').value = null;
    document.getElementById('num2').value = null;
    document.getElementById('operation').value = null;

    document.getElementById('num1').style.border = '1px solid rgb(77, 75, 75)';
    document.getElementById('num2').style.border = '1px solid rgb(77, 75, 75)';
    document.getElementById('operation').style.border = '1px solid rgb(77, 75, 75)';
}