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
    "U2FsdGVkX1891jgMzPOD/LA9A8/E1tXpmtD6rQOjy48aN9gY8o7XPkfy+BGCVe7jNF6wSRD6UkbIWVsMtiO+ymroXZwKafOzjFnvji/PKCkwUU+h6lMQ3PoZxZ1KRn+N",
    "U2FsdGVkX19rs5iLJtkN9REAhqj4E0ZR3vGqRP+nrz/akRDpSeVBW4r7Z3O98ID71Ga+dLMsrPF3ncNox6tRcW4YJWrectYA2goqhrjGRsrUqinJkn8kgQDi/EAq3AB51EXi4Ru+CEwTa23oKQbKXg==",
    "U2FsdGVkX19b/PQK938Imbs8XMiuxKcSRq7iVvD+giWxH9n+9elsgWq4ORijeQNJ3cdMMQZYAm/INOPfBvXYN4vuCqBbUndxVRNLZ0TTqSI8THR01BrBJs8G5SvhfCvwmRSm5MK7qyX8EBdBTM8HADRKxlykLbj4irvFWz0T+lo=",
    "U2FsdGVkX19Z1RbChRVN0SVxF4qcgnFVt0HF4IVL90ncK3LT97cdPbOVjHRCz8zs6r7F48Nwu3NFjimcR6kNxqM4L2dgCg4nXrhTbYygY1XMWIgxODnEIMsoj4OKk0MKly6uDLhoyRM28YzxND7Uqg==",
    "U2FsdGVkX1/Cbytwjnlo9k7TLXXvqZXQPw/CwuU/7FT9JC557EOCer96s0xaPaKSvUCPY1EOk0FtyTki90KCmgTfQsrsM82C5XUYhN1vJiM7nHV47nS6XCy++eGjHt1sdQve0su8x8LBuz/PO7NiORTt92AU6ZJB/5JwMZ9z88M=",
    "U2FsdGVkX1+fz2t9T+51Xt790BkXJd8MS5P17BRA2ZK4UEJ6GWWeSDQaXRtc70fcw3d1jqCDoCY9Q6EhvqagJaCZrqiTjx1P87DkqT5cWGk=",
    "U2FsdGVkX18fOz5H/6DzQIN+V+Vwz7Ph2jjS1oWMoHpHnXOivhojn4OB3mcjw4zvHGXZPCy+h65xtRaHi/r+X8wuK7kHmsJ1F5c23PSrcScXA+evQ2O0//okciMhzVSFyAht2wLjI7CkVO0CflpiLiHAtNh+XVUSuWc2JnMN/gM="
];
