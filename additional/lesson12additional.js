// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


const firstTsk = document.getElementsByClassName('firstTask')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(item => item.json())
    .then(item => {
        for (const itemEl of item) {
            const mainDivAndBtn = document.createElement('div');
            const mainDiv = document.createElement('div');
            const btn = document.createElement('button');
            btn.innerHTML = `posts`;
                mainDiv.append(fn(itemEl));


            btn.onclick = () => {
                btn.style.display = 'none';
                fetch(`https://jsonplaceholder.typicode.com/users/${itemEl.id}/posts`)
                    .then(item => item.json())
                    .then(item => {
                            const post = document.createElement('div');
                            post.style.marginTop = '20px';
                        for (const it of item) {

                            const div4PostAndBtn = document.createElement('div');

                            const div4EveryPost = document.createElement('div');
                            const btn4Comment = document.createElement('button');
                            btn4Comment.innerHTML = `comment`;
                            btn4Comment.classList.add('post');
                            div4EveryPost.append(fn(it));

                            btn4Comment.onclick =()=>{
                                btn4Comment.style.display = 'none';
                                fetch(`https://jsonplaceholder.typicode.com/posts/${it.id}/comments`)
                                    .then(ite => ite.json())
                                    .then(ite => {
                                        const comment = document.createElement('div');
                                        comment.style.marginTop = '20px';
                                            comment.append(fn(ite));

                                            comment.style.marginTop = '5px';
                                            comment.style.marginBottom = '5px';
                                            comment.style.background = '#44b7da'
                                        div4PostAndBtn.append(comment);
                                    }
                                    )
                            }


                            div4PostAndBtn.append(div4EveryPost,btn4Comment);
                            div4PostAndBtn.style.marginTop = '10px'
                            div4PostAndBtn.style.marginBottom = '10px'
                            div4PostAndBtn.style.background = '#479eb2'

                            post.append(div4PostAndBtn);

                        }
                            mainDiv.append(post);
                    })
            }
            mainDivAndBtn.append(mainDiv,btn);
            mainDivAndBtn.style.marginBottom = '40px';
            mainDivAndBtn.style.marginBottom = '40px';
            mainDivAndBtn.style.background = '#477db2';
            firstTsk.append(mainDivAndBtn);

        }

    })









let fn = (itemEl) => {
    const div = document.createElement('div');
    for (const it in itemEl) {
        const innerDiv = document.createElement('div');
        if(typeof itemEl[it] !== 'object'){
            innerDiv.innerHTML = `${it} : ${itemEl[it]}`;
        }else {
            for (const i in itemEl[it]) {
                const inner2Div = document.createElement('div');
                if(typeof itemEl[it][i] !== 'object'){
                    inner2Div.innerHTML = `${i} - ${itemEl[it][i]}`;
                }else {
                    for (const j in itemEl[it][i]) {
                        const lastDiv = document.createElement('div');
                        lastDiv.innerHTML = `${j} - ${itemEl[it][i][j]}`
                        inner2Div.append(lastDiv);
                    }
                }
                innerDiv.append(inner2Div);
            }
        }
        div.append(innerDiv);

}
return div;
}






// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


// const secondTsk = document.getElementsByClassName('secondTask')[0];
//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(item => item.json())
//     .then(item => {
//         for (let i = 0; i < item.length; i++) {
//             const mainDivPostBtn = document.createElement('div');
//             const mainDivPost = document.createElement('div');
//             const btn = document.createElement('button');
//
//             mainDivPost.append(itin(item[i]));
//
//             btn.onclick = () => {
//                 btn.style.display = 'none';
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${item[i].id}/comments`)
//                     .then(item => item.json())
//                     .then(it => {
//                         const mainDivComment = document.createElement('div');
//                         for (const itemElement of it) {
//                             mainDivComment.append(itin(itemElement));
//                         }
//                         mainDivComment.style.margin = '30px';
//
//                         mainDivPost.append(mainDivComment);
//                     })
//             }
//             mainDivPostBtn.append(mainDivPost,btn);
//             mainDivPostBtn.style.background = '#5796a4'
//             mainDivPostBtn.style.marginBottom = `40px`;
//
//             secondTsk.append(mainDivPostBtn);
//
//
//         }
//     })
//
// let itin = (item)=>{
//     const div = document.createElement('div');
//     for (const it in item) {
//         const innerContentOfPost = document.createElement('div');
//         innerContentOfPost.innerHTML = `${it} - ${item[it]}`;
//         div.append(innerContentOfPost);
//     }
//     return div
// }




// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// в окркмій папці shop
