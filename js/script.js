let menu=document.querySelector('.menu')
let link=document.querySelector('.link')
menu.addEventListener('click', function(event){
    if (link.classList.contains('hidden')) {
        link.classList.toggle('hidden')
} else {
    link.classList.add("hidden")
}
})