// Agrega un evento de clic al botón "pasteTextButton"
document.getElementById('pasteTextButton').addEventListener('click', function() {
    // Utiliza el API del portapapeles del navegador para leer el texto del portapapeles
    navigator.clipboard.readText().then(function(clipboardText) {
        // Cuando se lee el texto con éxito, lo asigna al elemento de entrada de texto con id "inputText"
        document.getElementById('inputText').value = clipboardText;
    }).catch(function(error) {
        // Si hay algún error al leer el portapapeles, muestra una alerta con el mensaje de error
        alert('Error al leer del portapapeles: ' + error);
    });
});


// Agrega un evento de clic al botón "encryptButton"
document.getElementById('encryptButton').addEventListener('click', function() {
    // Obtiene el texto ingresado por el usuario en el área de entrada de texto
    var inputText = document.getElementById('inputText').value;

    // Encripta el texto utilizando la función encryptText()
    var outputText = encryptText(inputText);

    // Asigna el texto encriptado al área de texto de salida
    document.getElementById('outputText').value = outputText;
});


// Agrega un evento de clic al botón "decryptButton"
document.getElementById('decryptButton').addEventListener('click', function() {
    // Obtiene el texto ingresado por el usuario en el área de entrada de texto
    var inputText = document.getElementById('inputText').value;

    // Desencripta el texto utilizando la función decryptText()
    var outputText = decryptText(inputText);

    // Asigna el texto desencriptado al área de texto de salida
    document.getElementById('outputText').value = outputText;
});

// Agrega un evento de clic al botón "CleanButton"
document.getElementById('CleanButton').addEventListener('click', function() {
    // Limpia el campo de entrada
    document.getElementById('inputText').value = "";
    // Limpia el campo de salida
    document.getElementById('outputText').value = "";
});

// Agrega un evento de clic al botón "copyTextButton"
document.getElementById('copyTextButton').addEventListener('click', function() {
    // Obtiene referencias al área de entrada y salida de texto
    var inputTextArea = document.getElementById('inputText');
    var outputTextArea = document.getElementById('outputText');

    // Elimina el texto del área de entrada de texto
    inputTextArea.value = "";

    // Obtiene el texto del área de salida de texto
    var outputText = outputTextArea.value;

    // Copia el texto del área de salida de texto al portapapeles
    copyToClipboard(outputText);
});



// Función de encriptar
function encryptText(text) {
    // Verifica si el texto contiene solo letras minúsculas, números y espacios
    if (!/^[a-z0-9\s]+$/.test(text)) {
        // Si el texto contiene caracteres no permitidos, muestra un mensaje de error
        alert('Error: El texto no debe contener letras mayúsculas, acentos o caracteres especiales.');
        // y devuelve una cadena vacía
        return '';
    }
    
    // Reemplaza cada letra minúscula o número en el texto
    return text.replace(/[a-z0-9]/g, function(caracter) {
        // Utiliza un switch para reemplazar cada letra/número con su equivalente encriptado
        switch (caracter) {
            case 'e':
                return 'enter'; // Reemplaza 'e' con 'enter'
            case 'i':
                return 'imes'; // Reemplaza 'i' con 'imes'
            case 'a':
                return 'ai'; // Reemplaza 'a' con 'ai'
            case 'o':
                return 'ober'; // Reemplaza 'o' con 'ober'
            case 'u':
                return 'ufat'; // Reemplaza 'u' con 'ufat'
            default:
                return caracter; // Si el carácter no es una vocal, devuelve el mismo carácter sin cambios
        }
    });
}


// Función de desencriptar
function decryptText(text) {
    // Verifica si el texto contiene solo letras minúsculas, números y espacios
    if (!/^[a-z0-9\s]+$/.test(text)) {
        // Si el texto contiene caracteres no permitidos, muestra un mensaje de error
        alert('Error: El texto no debe contener letras mayúsculas, acentos o caracteres especiales.');
        // devuelve una cadena vacía
        return '';
    }

    // Reemplaza cada palabra encriptada en el texto
    return text.replace(/(enter|imes|ai|ober|ufat|\d+)/g, function(match) {
        // Utiliza un switch para reemplazar cada palabra encriptada con su equivalente original
        switch (match) {
            case 'enter':
                return 'e'; // Reemplaza 'enter' con 'e'
            case 'imes':
                return 'i'; // Reemplaza 'imes' con 'i'
            case 'ai':
                return 'a'; // Reemplaza 'ai' con 'a'
            case 'ober':
                return 'o'; // Reemplaza 'ober' con 'o'
            case 'ufat':
                return 'u'; // Reemplaza 'ufat' con 'u'
            default:
                return match; // Si la palabra no es una de las encriptadas, la devuelve sin cambios
        }
    });
}


// Función para copiar texto al portapapeles del usuario
function copyToClipboard(text) {
    // Utiliza el API del portapapeles del navegador para escribir el texto
    navigator.clipboard.writeText(text)
        .then(() => {
            // Si la operación se realiza con éxito, muestra un mensaje de confirmación en la consola
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            // Si hay un error al copiar el texto, muestra un mensaje de error con el detalle del error
            alert('Error al copiar texto al portapapeles: ' + err);
        });
}


