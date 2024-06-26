const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


/*Chama as funções de validações do formulário */
form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

/*verifica se o campo foi preenchido conforme a interação do usuário*/
email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

/*lógica de preenchimento obrigatório de nome */
function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Preencha o seu nome!")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

/*lógica de preenchimento obrigatório de e-mail*/
function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "O e-mail é obrigatório.")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}

/*lógica de validação de tamanho de senha*/
function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatória!")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}


/*lógica para comparação de igualdade de senhas preenchidas */
function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }


}

/*Valida sem todos os inputs foram preenchidos, caso identifique que esteja vazio(error) impede que o cadastro seja efetuado*/
function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        alert("CADASTRADO COM SUCESSO!")
    } else {
        alert("Preencha todos os campos corretamente.")
    }

}



function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a") /*consulta tag da mensagem de erro.*/

    textMessage.innerText = message;

    formItem.className = "form-content error" /*Chama tag "a" quando dentro do form-content ocorrer error.*/
}
