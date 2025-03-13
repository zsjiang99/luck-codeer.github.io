const textElement = document.getElementById("typing-text");
const text = "你好，欢迎来到我的主页！";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();
