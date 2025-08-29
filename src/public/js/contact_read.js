
const contactForm = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const title = document.getElementById('title');
const contact = document.getElementById('contactComment');



// 送信内容オブジェクト宣言
let sendObject = { 
};



// 送信内容オブジェクトの内容をhiddenフィールド・span要素にセット
const getObjetToElement = (propaty, value) => {
    const confirmElemName = `${propaty}-confirm`;
    //const hiddenElemName = `${propaty}-hidden`;
    document.getElementById(confirmElemName).innerHTML = value;
    //document.getElementById(hiddenElemName).value = value;
}

// 送信内容オブジェクトの内容を入力項目の入力値にセット
const setObjetToElement = (propaty, value) => {
    document.getElementById(propaty).value = value;
} 


// 入力画面より送信された時
contactForm.addEventListener('submit', event => {
    event.preventDefault();

    sendObject.name = document.getElementById('name').value;
    sendObject.email = document.getElementById('email').value;
    sendObject.title = document.getElementById('title').value;
    sendObject.contactComment = document.getElementById('contactComment').value;
    
    localStorage.setItem('send-object', JSON.stringify(sendObject));

    const inputSection = document.getElementById('input-section');
    inputSection.style.display = 'none';

    const confirmSection = document.getElementById('confirm-section');
    confirmSection.style.display = 'block';

    const completeSection = document.getElementById('complete-section');
    completeSection.style.display = 'none';

    getObjetToElement('name', sendObject.name);
    getObjetToElement('email', sendObject.email);
    getObjetToElement('title', sendObject.title);
    getObjetToElement('contactComment', sendObject.contactComment);

});

// 確認画面より送信された時
document.getElementById('send-button').addEventListener('click', () => {
    const inputSection = document.getElementById('input-section');
    inputSection.style.display = 'none';

    const confirmSection = document.getElementById('confirm-section');
    confirmSection.style.display = 'none';

    const completeSection = document.getElementById('complete-section');
    completeSection.style.display = 'block';


    //const sendData = localStorage.getItem('send-object')

    fetch('/contact/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendObject)
    });
    

})

// 確認画面より戻るボタン押下時
document.getElementById('back-button').addEventListener('click', () => {
    const inputSection = document.getElementById('input-section');
    inputSection.style.display = 'block';

    const confirmSection = document.getElementById('confirm-section');
    confirmSection.style.display = 'none';

    const completeSection = document.getElementById('complete-section');
    completeSection.style.display = 'none';

    setObjetToElement('name', sendObject.name);
    setObjetToElement('email', sendObject.email);
    setObjetToElement('title', sendObject.title);
    setObjetToElement('contactComment', sendObject.contactComment);
})



