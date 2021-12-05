//Slideshow

const slideshowDivs = () =>{
    for(let i=1;i<=5;i++){
        const div =document.createElement('div') /* create an element */

        div.style.backgroundImage =`url(images/slideshow/section-1-bg-${i}.jpg)` /*assign a proper background for newly created element */

        i===1 && div.classList.add('change')
        document.querySelector('.slideshow').appendChild(div)

    }
}


slideshowDivs()

const divs =document.querySelectorAll('.slideshow div')

let a =1 /* let variable because it is changing*/
const slideshow = () =>{
    setInterval(()=>{
        a++
      
        const div =document.querySelector('.slideshow .change')

        div.classList.remove('change')
        if(a < divs.length){
            div.nextElementSibling.classList.add('change')
        }else{
            divs[0].classList.add('change')
            a=1
        }
       


    },2000)

    

}
//End of Slideshow
slideshow()