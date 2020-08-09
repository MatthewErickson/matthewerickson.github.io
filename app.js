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
    "U2FsdGVkX19a1yR+RmsgLT1RjDwjOsOB/z11BgrROAQqoFJsO24074JFM4q7EEEFMzk5v0uMVoHboAcnwjRQvQJIvCxM+nre15VC6KR4lfbz3gjtPHk+rRWsVQAY4QAq",
    "U2FsdGVkX19Opwyf4unwiJGjiute3D6ZEnK6v4CKhwxK2nDXD6HI3bspauN7Uv/VQSSyLOlcSBf7OYo1g+KmEVfCpdf61U+CBBpW2KcM7TTFbp9+II1qGpsEdCHSkWF9PyspDiPu7SqoHPnMWy602g==",
    "U2FsdGVkX18u+mNP00is6WgWCH/3CgJJVLjU/+hpbXxrbvzJveYFd/R1x7YYm/ZFtAfz2QEaw0dEvQ7R4zhdXTI2XJ9vxlUpyrt44Pl3c35926cd82ng+Z+du1KlZwauaIJumeIa7DD+6LEQMjcQkYvXaUZv2QUpD4tIUiZ9u8Y=",
    "U2FsdGVkX1/PexTymcjucwEl9Wws4rrfdMJo+TuacexH5vN03eTsezaHiEvW59wYSoJAOP/icbqUiWDjBKLZ2Dx2NCsP5xm/C864aixHft7pwl+DT43d+0AaMdWcXnC3EOefVkOLxVZ9XCiXfDsvJg==",
    "U2FsdGVkX1/oxHVqusyggeFQGSNLhnYSnvi4OZwvg4x3HdfXQ2l6eY+4nmKxt8CJs009mQBnD07tgWT2P/9QC/n5NA9WC2EwNsb8O8rZna+9fwYZp/Jy9rZ5zK2O+YnrMAeyiNqwDynJ9os8e2KxS9g6Z9wbJLR3iiRf9zEA3Ac=",
    "U2FsdGVkX1/4zNyqHjv7uh7U6HCkFbBQd+t43YNiHedkGm3WuUZ91xKF72+/Rxs4sOHJBG83AceDZ3hu8jmexew1lv0PwtOGvHHavycWGX4=",
    "U2FsdGVkX19uwidgowph7wn/c0PSABfqWHptkA2U89Il4KNJ4sF9pAAM3wou5CX2UAMzyLn9lTnoJEIIDV00AbD81m8021CabMOMCGw3itK74dA0mjyWtv7Pk1OOdOnsw9wsbx1oKZfkMJruRPwyzHFYAP+eUBCfszDAFp2YN58="
];
