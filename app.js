function encrypt(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}

function decrypt(encrypted, key) {
    return CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
}
var encrypted_data_redmond = [
    "U2FsdGVkX1/nGoTG+cHV7+dF0ADJlkTv+Azu8R9sU8qYSGaZ4aV8qgEbMjZzjT1U7MAlTkLTOCQpzq0SMrPd4d0X0NNB+J+xEuQjsWW/In5NXS6aY6Wcy23tIc2Armdz",
    "U2FsdGVkX1/an7c6KWxPNjfotRy7Ox4v95xrIIbjAhwGg9rQm3+CM3ba3VWvAaRTOirNUd/O2yFVNjLk7RgSvNKmN9rEW4Ng29vfzDiv3OtTcIc1dR+c4a0UM8yn+VDrM8lgFtHmqGcBBH413IV9M0/9mE/HMN8+Df8DtMCOOrU=",
    "U2FsdGVkX18FTXbj/CpT5AmZ90eUa8VTJS9vwoRf42dnzbJ45mi2EX22RGUNwzS/BC1vLzwc51/PpVvZLLv9KJa5WaOkXCi3I8xKKk3PoXPEoT6xAdjEtMBC+yZWva28bMJaZtqI839SQb87z8/fAw==",
    "U2FsdGVkX1/jVQX7rJG0RiLvuPwa0Fp8CZQa6p1w1fUBPnkwyEane6wKCcKZUK7erkWwTDsdRMLh/M4VOAZ6gFDm+5nYAIxGpeB9vLkgicZMVhUw9T7nKucvFzdtccq22idN9Go43y4R6XtRIMu1TQ==",
    "U2FsdGVkX1/a7d+nb3RY9GGP1hDBWJRrW/hM2BquUwUJ7al/shq0bIwqgYiWMe4kZjm0hikudwqgd6GhtEJ3ihQKdO5TBpPHx9BqC79dWykBRau9e8ZGKd81Cb85Nr4rK+9I9/E57QMicEN6YMySOl7Yii6vpznlxeCXW0ANsrc=",
    "U2FsdGVkX18S2C/HgFPRTTDBu1CItkMmZ11pNFIQsXLwMSsr4eSR2tOu0AizHibqHW3RXksKCIWYQEWz3xRacy3igdbTv6Mssdif2TyR07k=",
    "U2FsdGVkX18DsyAolS/2IXMunRP1idcG2QWGfapq7fQwvs7Dne2nBTjCW+JOks7bee4UXUxzS2/lIPN6Ec771aIw31LFyX+9Sqy+i4n0Lei4FWlqnUWlqw0n3zr4jWUxRdnSgQniOmKGtlQb/1Ii9r4B0JCkDXi3HDbPsA//CXE="
];

function submitRedmondAnswer() {
    $("#data-output-redmond")[0].innerHTML = "";
    $("#data-output-redmond")[0].style = "color: white";
    var answer = $("#data-redmond")[0].value;
    for (var i in encrypted_data_redmond) {
        try {
            var decrypted = decrypt(encrypted_data_redmond[i], answer);
            if (decrypted && decrypted != "rb") {
                $("#data-output-redmond")[0].innerHTML = decrypted;
                return;
            }
        } catch (e){
        }
    }
    $("#data-output-redmond")[0].innerHTML = "Decryption failed.";
    $("#data-output-redmond")[0].style = "color: red";
}

var encrypted_data_public = [
    "U2FsdGVkX19ZBoAwzbYdl/b/9ngnghJKjSt2ajchkUDtRNThQlZZVp5p7wmcjYK1V7ywIEuXLH+acT9SW7yXPE7rxDZLyAiNmCdr5TR24Aw=",
    "U2FsdGVkX1/8Nbdw2eHjgHPG7+8JCqMXfvOD6A6ljp7DbgNUeazY3+ylGtDTojuQDtnF2JHFmG5NKBfSqeufp5z372h9uonnO+6LDm1wXeS+A9l+Q7o9AiwRn4WSd1GSYgtr04huR2nN5oCPfFXzNVI/1TKZKI8MSx5xZoUAvyY="
];

function submitPublicAnswer() {
    $("#data-output-public")[0].innerHTML = "";
    $("#data-output-public")[0].style = "color: white";
    var answer = $("#data-public")[0].value;
    for (var i in encrypted_data_public) {
        try {
            var decrypted = decrypt(encrypted_data_public[i], answer);
            if (decrypted && decrypted != "rb") {
                $("#data-output-public")[0].innerHTML = decrypted;
                return;
            }
        } catch (e){
        }
    }
    $("#data-output-public")[0].innerHTML = "Decryption failed.";
    $("#data-output-public")[0].style = "color: red";
}
