const phone = document.getElementsByClassName('phone')[0];


const form = document.getElementsByClassName('container')[0];
const firstname = document.getElementsByClassName('firstname')[0];
const lastname = document.getElementsByClassName('lastname')[0];
const email = document.getElementsByClassName('email')[0];

const date = document.getElementsByClassName('date')[0];
const confirmPassword = document.getElementsByClassName('confirmPassword')[0];

const country= document.getElementsByClassName('country')[0];


// console.log(username.classList[0]);

// const fields = document.getElementsByClassName('toBeFilled');

// console.log(form);



// const usernameField = username.querySelector('input');
// usernameField.value = 'Anvesha';

function isInputGiven(targetField) {
    const target = targetField.querySelector('input');

    return target.value.length > 0;
}


// checkMinMax(username,4,10);

// username.querySelector('input')

function checkMinMax(targetField, min, max) {
    const target = targetField.querySelector('input');
    if (target.value.length >= min && target.value.length <= max) {
        return true;
    }
    return false;
}

function isConfirmPasswordSame(password, confirmPassword) {
    const passwordField = password.querySelector('input');
    const confirmPasswordField = confirmPassword.querySelector('input');
    return passwordField.value === confirmPasswordField.value;
}


const Fields = [firstname, lastname, email, date];

function hideErrors() {
    Fields.forEach((field) => {
        console.log(field);
        if (field !== date && field!==email) {
            const fieldErr = field.querySelector('.onError');
            fieldErr.innerText = "";
        }
    })
}

function validateFields() {
    for (let i = 0; i < Fields.length; i++) {
        let targetField = Fields[i];

        if (isInputGiven(targetField)) {
            if(targetField==email){
                continue;
            }
            if (targetField === date) {
                targetValue = targetField.querySelector('input').value;
                if (targetValue > '2005-01-04') {
                    const errorField = targetField.querySelector('.onError');
                    errorField.innerText = "You should be atleast 18 years old !";
                    return;
                }
            }

            if (!checkMinMax(targetField, 4, 20)) {
                // alert(`${targetField.classList[0]} length should be >=8 and <=20 `);
                const errorField = targetField.querySelector('.onError');
                errorField.innerText = targetField.classList[0] + "length should be >=8 and <=20 ";

            }
        }
        else {
            // alert('usernaem Not Given');
            const errorField = targetField.querySelector('.onError');
            errorField.innerText = "Please enter this field !";
            return;
        }
    }
}



phoneNumber= phone.querySelector('.phoneNumber');
const phoneNum=phoneNumber.querySelector('.phoneNum')

const code = phoneNumber.querySelector('.code');

country.addEventListener('click',()=>{
    const errorField = phone.querySelector('.onError');
        errorField.innerText = "";
})


phoneNum.addEventListener('click',()=>{
    
    const callCode = country.querySelector('.countrySel');
    if(callCode.value=='NOT'){
        const errorField = phone.querySelector('.onError');
        errorField.innerText = "Please select Country Code first !";

        return;
    }
    code.innerText=callCode.value;
  
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideErrors();
    const emailField = email.querySelector('input');
    console.log(emailField.value);
    validateFields();
})



// const result = checkMinMax(username, 8, 10);
// console.log(result);
