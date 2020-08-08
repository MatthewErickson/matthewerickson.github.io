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
    "U2FsdGVkX195+csHPigosb5qAvw1STidljmEG+PMBvKUbhu6klzg6nvPFNbOeopCIebjO9N4dqSKpRqlMoe4ntqD0RgEAA0vV3FwVzz49+B574xQhdKZ8C4mozPPyhTA",
    "U2FsdGVkX1+G6myvX3nMWP96q8nmHvySfDKkCJJk/54uKar4VQN+b7qFufw/gt8/4zNZD21Vi536cvSfRwvqRNt7mOeMDgjA+FEwin/zUWDcSxzt6ECYBzIDgNINhHdG6WwuiRT584MaiEx2VVpq0Q==",
    "U2FsdGVkX18K+rsi7Equ8jZwAd1ijhVTxrZDmiwxDI6CGZtIij9W8vEfGu/lsaDKOcXxTPLlRTgieCILo7yuzY1kxcbRvi5ZK1yvU0FdMqHyEd1c5uc3foLFTOHbAJNPWcDe7r4iJIE//gTqgtwroipXdRVzp/F9/sOcf3vAOBc=",
    "U2FsdGVkX184y/MkReDRRUHHxQq8yTqCHVb/XTZ+EyF74gXAefYLh4QxNQ8f3dlZIgMgf+tMTu4gVpxgUuKOqKabmAAKcihLjy50y2c0EalT5nwbPd4hX6JHpcNFPoCdSgDymmGHkufWbXe18FzFgA==",
    "U2FsdGVkX19DQFXCajdkM8OT5nbHkJ6vMZorLgOXonO878psTPCihGy/Ft2+FfNxCMYAkwORr53utM/rNpl9mS5GVwA/KKecwzi7T+W2Ptj7ICIuiI0DbZrJEdSeZYQZuHFx1L8Pre3pa2JhU76+fW6y8gKoPyIfSS6UMBNfQ3s=",
    "U2FsdGVkX1/fgQdc0sPOFSzO8fEz6oH0ARpAt9gRuEmOb2+euntawR93sw9t0wIM",
    "U2FsdGVkX1/mtsLTn14Ja1pj1eYqXhWO510s8iV9BT7DEWFxggYfWSgXg1TFtbrfpQFjj5NuP8qS3hB+HlO+Ht970T8luwIGqiKRCIh/Im3gxkzMZoT8GABcNgKFJW3WOK3WAZP6kFYXPI74n3EJAkKy6lZ0oCXIrNqDGj9SjSg="
];
