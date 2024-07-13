const firebaseConfig = {
    apiKey: "AIzaSyB8b5QxEdXn9XGR3SrM_8KMjAjIbnZG9mw",
    authDomain: "atividade5-5d0a8.firebaseapp.com",
    projectId: "atividade5-5d0a8",
    storageBucket: "atividade5-5d0a8.appspot.com",
    messagingSenderId: "735061618853",
    appId: "1:735061618853:web:1ef279265cac0524021d4c",
    measurementId: "G-BMD6GTW659"
}; 
   
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
    auth.then(function(userCredential) {
        console.log('Usuário Logado com Sucesso!!');
    })
    .catch(function(error) {
        console.log('Usuário não Logado', true);
    });
}

document.getElementById('loginButton').addEventListener('click', function() {
    login();
});

function displayFeedback(message, isError = false) {
    const feedbackContainer = document.getElementById('feedback');
    feedbackContainer.style.color = isError ? 'red' : 'green';
    feedbackContainer.innerText = message;
}

function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
    auth.then(function(userCredential) {
        const user = userCredential.user;
        const user_data = {
            email: email,
            registration_time: new Date().toString(),
        };
        set(ref(database, 'users/' + user.uid), user_data);
        displayFeedback('User Created!!');
    })
    .catch(function(error) {
        displayFeedback(error.message, true);
    });
}

document.getElementById('registerButton').addEventListener('click', function() {
    register();
});

function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function testarValidacaoEmail(email) {
    try {
        validate_email(email);
    } catch (erro) {
        console.error("Erro capturado:", erro.message);
        console.error("Nome do erro:", erro.name);
    } finally {
        console.log("Validação concluída.");
    }
}

function validate_password_min(password) {
    return password.length >= 6;
}

function testarValidacao_Password_Min(password) {
    try {
        validate_password_min(password);
    } catch (erro) {
        console.error("Erro capturado:", erro.message);
        console.error("Nome do erro:", erro.name);
    } finally {
        console.log("Validação concluída.");
    }
}

function validate_password_max(password) {
    return password.length <= 10;
}

function testarValidacao_Password_Max(password) {
    try {
        validate_password_max(password);
    } catch (erro) {
        console.error("Erro capturado:", erro.message);
        console.error("Nome do erro:", erro.name);
    } finally {
        console.log("Validação concluída.");
    }
}

function validarNumeros(a, b) {
    if (typeof a !== 'number') {
        throw new Error("O primeiro argumento não é um número");
    }
    if (typeof b !== 'number') {
        throw new Error("O segundo argumento não é um número");
    }
    console.log("Ambos os argumentos são números:", a, b);
}

function testarValidacaoNumero(a, b) {
    try {
        validarNumeros(a, b);
    } catch (erro) {
        console.error("Erro capturado:", erro.message);
        console.error("Nome do erro:", erro.name);
    } finally {
        console.log("Validação concluída.");
    }
}

function validarLetra(a, b) {
    const isLetter = char => /^[a-zA-Z]$/.test(char);
    if (!isLetter(a)) {
        throw new Error("O primeiro argumento não é uma letra");
    }
    if (!isLetter(b)) {
        throw new Error("O segundo argumento não é uma letra");
    }
    console.log("Ambos os argumentos são letras:", a, b);
}

function testaValidacaoLetra(a, b) {
    try {
        validarLetra(a, b);
    } catch (erro) {
        console.error("Erro capturado:", erro.message);
        console.error("Nome do erro:", erro.name);
    } finally {
        console.log("Validação concluída.");
    }
}