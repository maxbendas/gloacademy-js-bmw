const menuElem = document.querySelector('.menu')
const humburgerElem = document.querySelector('.humburger-menu')
// const menuList = document.querySelector('.menu-list')

const handlerMenu = e => {
    console.log('body')
    const target = e.target
    const parent = target.closest('.menu')
    if ((!parent && target !== humburgerElem) || target.classList.contains('menu-list__link')) {
        toggleMenu()
    }
}

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    humburgerElem.classList.toggle('humburger-menu-active')

    if (menuElem.classList.contains('menu-active')) {
        document.body.addEventListener('click', handlerMenu)
    } else {
        document.body.removeEventListener('click', handlerMenu)
    }
}

humburgerElem.addEventListener('click', toggleMenu)

// menuList.addEventListener('click', (e)=>{
//     const target = e.target
//     if (target.classList.contains('menu-list__link')){
//         toggleMenu()
//     }
// })