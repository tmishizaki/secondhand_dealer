const dropImage = document.getElementById('drop-image');
const prevewImages = document.getElementById('prevew_image');
const itemImageFile = document.getElementById('item-image-file');
const itemForm = document.getElementById('item-form');

// 送信内容オブジェクト宣言
let sendObject = { 
    imageArray: []
};



// 画像ファイルをli要素で表示する関数
const getImageData = (prevewElement, imgArray) => {
    document.getElementById(prevewElement).innerHTML = '';
    for( const image of imgArray ) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const dl = document.createElement('dl');
        img.width = '200';
        img.src = image.data;
        dl.innerHTML = `
        <dt>${image.filename}</dt>
        `;
        const imgNameHidden = document.createElement('input');
        imgNameHidden.type = 'hidden';
        imgNameHidden.name = 'img_file_name[]';
        imgNameHidden.value = image.filename;
        const imgDataHidden = document.createElement('input');
        imgDataHidden.type = 'hidden';
        imgDataHidden.name = 'img_data[]';
        imgDataHidden.value = image.data;

        li.appendChild(img);
        li.appendChild(dl);
        li.appendChild(imgNameHidden);
        li.appendChild(imgDataHidden);
        document.getElementById(prevewElement).appendChild(li);

   }
}

// 送信内容オブジェクトの内容をhiddenフィールド・span要素にセット
const getObjetToElement = (propaty, value) => {
    const confirmElemName = `${propaty}-confirm`;
    const hiddenElemName = `${propaty}-hidden`;
    document.getElementById(confirmElemName).innerHTML = value;
    document.getElementById(hiddenElemName).value = value;
}

// 送信内容オブジェクトの内容を入力項目の入力値にセット
const setObjetToElement = (propaty, value) => {
    document.getElementById(propaty).value = value;
} 

const iDb = indexedDB.open('image-data', 1);
iDb.onupgradeneeded = event => {
     const idbDb = event.target.result;
     const imagesDb = idbDb.createObjectStore('images', {keyPath: 'id', autoIncrement: true});
}
iDb.onsuccess = event => {
    const idbDb = event.target.result;
    //console.log(idbDb);
    const objStore = idbDb.transaction(['images'], 'readonly').objectStore('images');
    objStore.get(1).onsuccess = event => {
        const result = event.target.result;
        if( result ) {
            sendObject = result;
            setObjetToElement('name', sendObject.name);
            setObjetToElement('email', sendObject.email);
            setObjetToElement('prefecture', sendObject.prefecture);
            setObjetToElement('addres', sendObject.addres);
            setObjetToElement('item-type', sendObject.itemType);
            setObjetToElement('item-name', sendObject.itemName);
            setObjetToElement('item-price', sendObject.itemPrice);
            setObjetToElement('item-detail', sendObject.itemDetail);
            setObjetToElement('item-comment', sendObject.itemComment);
            getImageData('prevew_image', sendObject.imageArray);

            idbDb.transaction(["images"], "readwrite")
            .objectStore("images")
            .delete(1);
        }
    }
}

// 画像を指定されたらHTMLに表示
const appndImage = file => {
    const li = document.createElement('li');
    const image = document.createElement('img');
    const dl = document.createElement('dl');
    image.width = '200';
    dl.innerHTML = `
    <dt>${file.name}</dt>
    `;

    li.appendChild(image);
    li.appendChild(dl);
    prevewImages.appendChild(li);

    const reader = new FileReader();
    reader.addEventListener('load', event => {
        image.src = event.target.result;

        const imgObj = {
            filename: file.name,
            data: event.target.result
        }
        
        sendObject.imageArray.push(imgObj);
    });

    reader.readAsDataURL(file);
}

// 画像読み込み表示
const allImages = files => {
    prevewImages.innerHTML = '';
    for ( const file of files) {
        appndImage(file);
    }
}

// 画像ファイルをドラッグ＆ドロップされたときの処理
dropImage.addEventListener('dragover', event => {
    event.preventDefault();
})

dropImage.addEventListener('drop', event => {
    event.preventDefault();
    allImages(event.dataTransfer.files);
});

// 画像ファイルを入力項目から選択されたとき
itemImageFile.addEventListener('change', event => {
    allImages(itemImageFile.files);
});

// 入力画面より送信された時
itemForm.addEventListener('submit', event => {
    event.preventDefault();

    const iDb = indexedDB.open('image-data', 1);
    iDb.onupgradeneeded = event => {
        const idbDb = event.target.result;
        idbDb.createObjectStore('images', {keyPath: 'id', autoIncrement: true});
    }

    iDb.onsuccess = event => {
        const idbDb = event.target.result;
        const objStore = idbDb.transaction(['images'], 'readwrite').objectStore('images');
        objStore.add(sendObject);
    }
    

    sendObject.name = document.getElementById('name').value;
    sendObject.email = document.getElementById('email').value;
    sendObject.prefecture = document.getElementById('prefecture').value;
    sendObject.addres = document.getElementById('addres').value;
    sendObject.itemType = document.getElementById('item-type').value;
    sendObject.itemName = document.getElementById('item-name').value;
    sendObject.itemPrice = document.getElementById('item-price').value;
    sendObject.itemDetail = document.getElementById('item-detail').value;
    sendObject.itemComment = document.getElementById('item-comment').value;

    //localStorage.setItem('send-object', JSON.stringify(sendObject));

    const inputSection = document.getElementById('input-section');
    inputSection.style.display = 'none';

    const confirmSection = document.getElementById('confirm-section');
    confirmSection.style.display = 'block';

    getObjetToElement('name', sendObject.name);
    getObjetToElement('email', sendObject.email);
    getObjetToElement('prefecture', sendObject.prefecture);
    getObjetToElement('addres', sendObject.addres);
    getObjetToElement('item-type', sendObject.itemType);
    getObjetToElement('item-name', sendObject.itemName);
    getObjetToElement('item-price', sendObject.itemPrice);
    getObjetToElement('item-detail', sendObject.itemDetail);
    getObjetToElement('item-comment', sendObject.itemComment);

    getImageData('image-confirm', sendObject.imageArray);

});

// 確認画面より送信された時
document.getElementById('confirm-form').addEventListener('submit', () => {
    fetch('/purchase/customer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendObject)
    });
    indexedDB.deleteDatabase('image-data'); 
})

// 確認画面より戻るボタン押下時
document.getElementById('back-button').addEventListener('click', () => {
    const inputSection = document.getElementById('input-section');
    inputSection.style.display = 'block';

    const confirmSection = document.getElementById('confirm-section');
    confirmSection.style.display = 'none';

    setObjetToElement('name', sendObject.name);
    setObjetToElement('email', sendObject.email);
    setObjetToElement('prefecture', sendObject.prefecture);
    setObjetToElement('addres', sendObject.addres);
    setObjetToElement('item-type', sendObject.itemType);
    setObjetToElement('item-name', sendObject.itemName);
    setObjetToElement('item-price', sendObject.itemPrice);
    setObjetToElement('item-detail', sendObject.itemDetail);
    setObjetToElement('item-comment', sendObject.itemComment);


    getImageData('image-confirm', sendObject.imageArray);

    idbDb.transaction(["images"], "readwrite")
    .objectStore("images")
    .delete(1);
})



