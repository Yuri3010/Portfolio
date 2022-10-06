const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const aboutItem = document.querySelectorAll('.about-container');


/*Função criada para definir qual o query control estara ativo e, portanto, apresentara 
as caracteristicas de botão ativo.*/

function PageTransitions() {
    //Button click active class
    for (let i=0; i < sectBtn.length; i ++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    //Sections active class
    allSections.addEventListener('click',function(e) {
        //console.log(e.target) --> verify if my buttons with data-id redirect to id when clicked(addEventListener)
        const id = e.target.dataset.id;
        if(id) {
            //remove selected from other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
}




function mouseOver(){
    document.querySelector('.about-item').classList.add('jshover')
}

function mouseOut(){
    document.querySelector('.about-item').classList.remove('jshover')
}


PageTransitions();