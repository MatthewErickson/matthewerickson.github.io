var encrypted1 = "U2FsdGVkX1/ZfAIq/N5AS6I+dxYZvy2yHbKwEvQKfDzveKIMFxHK/aIaVQ/T3pVE";

function encrypt(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}

function decrypt(encrypted, key) {
    return CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
}

function submit1() {
    $("#data-output")[0].innerHTML = "";
    $("#data-output")[0].style = "color: white";
    var answer1 = $("#data1")[0].value;
    var answer2 = $("#data2")[0].value;
    var answer3 = $("#data3")[0].value;
    var combined = answer1 + "--" + answer2 + "--" + answer3;
    try {
        var decrypted = decrypt(encrypted1, combined);
        if (decrypted && decrypted != "rb") {
            $("#data-output")[0].innerHTML = decrypted;
        } else {
            error();
        }
    } catch (anything) {
        error();
    }
}

function error() {
    $("#data-output")[0].innerHTML = "One or more wrong answers. Decryption failed.";
    $("#data-output")[0].style = "color: red";
}
