const arr = localStorage.getItem('Busket');
const products = JSON.parse(arr);


const mainDiv = document.getElementById('mainDiv');
for (let i = 0; i < products.length; i++) {
    const div = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = `Delete`;

    for (const item in products[i]) {
        const lDiv = document.createElement('div');
        div.classList.add(`div${i}`);
        div.style.margin = '10px';
        switch (item) {
            case 'name_':
                lDiv.innerHTML = `${products[i][item]}`
                lDiv.classList.add('name_');
                break;
            case 'amount':
                lDiv.innerHTML = ` Amount - ${products[i][item]}pc`
                lDiv.classList.add('amount');
                break;
            case 'price':
                lDiv.innerHTML = `Price - <span class="priceNum">${products[i][item]}$</span>`
                lDiv.classList.add('price');
                break;
            case 'img_':
                lDiv.innerHTML = `<img src="${products[i][item]}" alt="">`;
        }

        div.append(lDiv);
    }
    div.append(btn);
    mainDiv.append(div);
}
document.body.append(mainDiv);


let setClass = (el, className_) => {
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add(`${className_}${i}`);
    }
}

const button = document.querySelectorAll('div div button');
setClass(button, 'btn');

const all = document.getElementById('all');

for (let i = 0; i < products.length; i++) {
       const btn = document.getElementsByClassName(`btn${i}`)[0];
       const div = document.getElementsByClassName(`div${i}`)[0];

       btn.onclick =()=>{
           div.remove();
           btn.remove();
           let r = removeP(products[i].id);
           localStorage.setItem('Busket', JSON.stringify(r));
       }



}

all.onclick = function () {
    let div = document.querySelectorAll(`div div`);
    for (const divElement of div) {
        divElement.remove();
    }
    localStorage.removeItem('Busket');
}

const removeP = someKey => {
    let products = localStorage.getItem('Busket');
    products = JSON.parse(products);

    const index = products.findIndex(product => product.id === someKey);

    if (index > -1) {
        products.splice(index, 1);
    }
    return products;
}






