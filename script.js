const menu = document.querySelector('.top-menu')
const burger = document.querySelector('.burger-btn')
burger.onclick = () => {
    menu.classList.toggle('mobile-menu')
    burger.classList.toggle('_close')
}

function removeClasses(className, parent){
    document.querySelectorAll(`.${className}`).forEach(item => item.classList.remove(`_show-${className}`))
    document.querySelectorAll(`.${parent}`).forEach(item => {
        const dropDown = item.querySelector('.drop-btn')
        if(dropDown !== null){
            dropDown.classList.remove('_clicked')
        }
    })
}

function showSubmenu(event) {
    const dropDown = event.target
    const submenu = dropDown.nextElementSibling
    const className = submenu.className
    const type = className.split(' ')
    const parent = dropDown.closest('li')
    
    removeClasses(className, parent.className)

    if(className === `${type[0]} _show-${type[0]}`){
        submenu.classList.remove(`_show-${type[0]}`)
        dropDown.classList.remove('_clicked')
    }else{
        dropDown.classList.add('_clicked')
        submenu.classList.add(`_show-${className}`)
    }
}

document.querySelectorAll('.drop-btn').forEach(item => {
    item.addEventListener('click', showSubmenu)
})