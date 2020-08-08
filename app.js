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
    "U2FsdGVkX1+i1+yXHCcl/wwP7hQQj6Vgtx9rq3YL24/EsNXOQfLdasIDyIQ5GtqlzK0TS2IV/vgV/pJiFGhsWF1cTfRfrgsbWLQKn89VFqwoZ82g+8BjxsiqdS0x3ukA",
    "U2FsdGVkX1+G6myvX3nMWP96q8nmHvySfDKkCJJk/54uKar4VQN+b7qFufw/gt8/4zNZD21Vi536cvSfRwvqRNt7mOeMDgjA+FEwin/zUWDcSxzt6ECYBzIDgNINhHdG6WwuiRT584MaiEx2VVpq0Q==",
    "U2FsdGVkX18K+rsi7Equ8jZwAd1ijhVTxrZDmiwxDI6CGZtIij9W8vEfGu/lsaDKOcXxTPLlRTgieCILo7yuzY1kxcbRvi5ZK1yvU0FdMqHyEd1c5uc3foLFTOHbAJNPWcDe7r4iJIE//gTqgtwroipXdRVzp/F9/sOcf3vAOBc=",
    "U2FsdGVkX184y/MkReDRRUHHxQq8yTqCHVb/XTZ+EyF74gXAefYLh4QxNQ8f3dlZIgMgf+tMTu4gVpxgUuKOqKabmAAKcihLjy50y2c0EalT5nwbPd4hX6JHpcNFPoCdSgDymmGHkufWbXe18FzFgA==",
    "U2FsdGVkX19DQFXCajdkM8OT5nbHkJ6vMZorLgOXonO878psTPCihGy/Ft2+FfNxCMYAkwORr53utM/rNpl9mS5GVwA/KKecwzi7T+W2Ptj7ICIuiI0DbZrJEdSeZYQZuHFx1L8Pre3pa2JhU76+fW6y8gKoPyIfSS6UMBNfQ3s=",
    "U2FsdGVkX1/Fpi1J8S1rFIoWOBWG3JJt3FthoZnozeG1ioA0DwDkpWbgNyrNMkkRaAbeKYf5F0M31ZUFEfAMSC5GD8cMDO131gfjrWPp7faItqMwzdkJ5g/Y7g21xo5EuWF871mU6CIWTote0+rN/Di58uZRxey6gMVlNhSF17s="
];
