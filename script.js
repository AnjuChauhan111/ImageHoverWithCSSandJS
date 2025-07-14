const list =document.querySelectorAll('li');

list.forEach((item)=>{

    item.addEventListener('mouseenter',()=>{

        const figure=item.querySelector('figure');
        figure.classList.add('slide-in');
        figure.classList.remove('slide-out');
    })
    item.addEventListener('mouseleave',()=>{

        const figure=item.querySelector('figure');
        figure.classList.add('slide-out');
        figure.classList.remove('slide-in');
    })
})