function encrypt(message, key) {
    return CryptoJS.AES.encrypt(message, key).toString();
}

function decrypt(encrypted, key) {
    return CryptoJS.AES.decrypt(encrypted, key).toString(CryptoJS.enc.Utf8);
}

function submitAnswer() {
    $("#data-output")[0].innerHTML = "";
    $("#data-output")[0].style = "color: white";
    var answer = $("#data1")[0].value;
    for (var i in encrypted_data) {
        try {
            var decrypted = decrypt(encrypted_data[i], answer);
            if (decrypted && decrypted != "rb") {
                $("#data-output")[0].innerHTML = decrypted;
                return;
            }
        } catch (e){
        }
    }
    error();
}

function error() {
    $("#data-output")[0].innerHTML = "Decryption failed.";
    $("#data-output")[0].style = "color: red";
}

// Nice try :)
var encrypted_data = [
    "U2FsdGVkX1/1m/ZS54LIx12YGOSxFQf3XltsEiLzuKiaDN/bpGB/g3DAhp6YqfIIP8cX2dXDlLXjGEly8NVzF0Ik390M5XJuj3txm2vaRQicVH7swaeEb6kpSHWjz2xA",
    "U2FsdGVkX19Ds1cqvlezr9kJCZNkMuyyqZM/wTEoj/ddStdZEM71IkebtJxixVFuG9P5B/1WwmoNpyRShrChK2GamhsGaekc8jU6NVNlpqOo+VPF7zFY7nELNKYy8Ej+iwtEs2hJy17KRhlSSSvZig==",
    "U2FsdGVkX18F02dz53w5yDSybFQioZzAh5dz1toY1sC/qKbzdRY/f1r5VHRipRO3KTTkFn3TpUxpYmlmpA5sMpgeiwFUoQr44wDIdzqM8xSDbNTOzjbjuts3b4yF6mkrzUr/S8LAyUAqGmElWC9BNbkDO9sTM4kLXcUHJhmjLkE=",
    "U2FsdGVkX19xBzkuea6nfGkBZF9vkdMmUXRnCg+najj55AziNALvdNhaaCzzdBmVxXsUxr44kFjxg2BGJVfjxq4GtPgOuEvJmprXEyf/6uZM58PWyIiPpvEdkck8TiSG+d79Lr/4Hs44bfIcF6G3OQ==",
    "U2FsdGVkX1/Ll1W7z5FpnPNU8gtCMLL8P+lJu0QG9WHbYoVI97iu5JBAwAIHVDj6v6saWCM04hIbX4mgxEhxTLMr47Z4ShrE3hn0uHX28XBY7YiMqjvO1QUqcbgMRCyobOIIZl2hBDnm11a7nXrCc2IvlF8GpLB3CyyM2v40GHQ=",
    "U2FsdGVkX18gR2P+ZvUt6JA6ZLM4b27oV4XCgnrf36wfPBbD9Wl/Yd3MHBn+2gJeyPh3DjOmNR6Bh+qb8czjCedqfPnXE4wiTkWJP6xfuVM=",
    "U2FsdGVkX19ywyaRu5MLJjLbL2C6YRaQCI20mG6xcLENfOamBKmAFIsjtGFvUpxiv7a/DJf1Od/T6Sr8r7XQMU9H0/+ikjVbWg8TyrWKUcSmpXwVsu8HS+/fboN7r/crasI/pOIBCpmDKM8orh51+PnspqidUhfBdEP91JbKp/I="
];
