var encrypted1 = "U2FsdGVkX19G6zuGTlZIUfZTB0uycVKz+68OX95TAg2SJLY+SnhHcB4haRiNTtOqdXzPpkoPXj61I4rM6seUIdtd6FQZknf6oHq2SesIslFkLwfhID0fQTlR1Eb+gii8";

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
            $("#data-output")[0].innerHTML = "One or more wrong answers";
            $("#data-output")[0].style = "color: red";
        }
    } catch (error) {
        $("#data-output")[0].innerHTML = "One or more wrong answers";
        $("#data-output")[0].style = "color: red";
    }
}
