const shadowEl = document.querySelectorAll('.shadow')
// const ansTitleEL = document.querySelectorAll('.answer-title')
// const btnEl = document.querySelectorAll('.btn')



// using selectors inside the Elements

shadowEl.forEach((selector) => {
    const ansEl = selector.querySelector('.btn')

    selector.addEventListener('click',()=>{
        shadowEl.forEach((item) =>{
            if(item !== selector){
                item.classList.remove("toggle")
            }
        })
    selector.classList.toggle("toggle")
    })
})

// traversing DOM

// btnEl.forEach(btn =>{
//     btn.addEventListener('click',(e)=>{
//         const answer = e.currentTarget.parentElement.parentElement;

//         answer.classList.toggle("toggle");
//     })
// })