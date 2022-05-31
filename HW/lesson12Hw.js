// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// const part = document.getElementsByClassName('mainPartOfPost')[0];
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(item => item.json())
//     .then(someList => {
//         for (const someListElement of someList) {
//             const mainDivObj = document.createElement('div');
//             mainDivObj.classList.add('post');
//             for (const it in someListElement) {
//                 const someDivEl = document.createElement('div');
//                 someDivEl.innerHTML = `${it} - ${someListElement[it]}`;
//                 mainDivObj.append(someDivEl);
//             }
//             part.append(mainDivObj);
//         }
//     })




//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// const part = document.getElementsByClassName('secondComment')[0];
//
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(item => item.json())
// .then(item =>{
//     for (const it of item) {
//         const mainDiv = document.createElement('div');
//         mainDiv.classList.add('comment');
//         for (const i in it) {
//             const el = document.createElement('div');
//             el.innerHTML = `${i} - ${it[i]}`;
//             switch (i){
//                 case 'postId': el.classList.add('postId');break;
//                 case 'id':  el.classList.add('id');break;
//                 case 'name':  el.classList.add('name');break;
//                 case 'email':  el.classList.add('email');break;
//                 case 'body':  el.classList.add('body');break;
//             }
//             mainDiv.append(el);
//         }
//         part.append(mainDiv);
//     }
// })