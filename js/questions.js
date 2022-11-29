(function(){
    const abrirDescripcion = [...document.querySelectorAll('.questions__title')];
  

    abrirDescripcion.forEach(e =>{
        e.addEventListener('click', ()=>{
            let inicio = 0;
            let answer = e.nextElementSibling;
            let addPadding = e.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');
            e.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                inicio = answer.scrollHeight;
            }

            answer.style.height = `${inicio}px`;
        });
    });
})();