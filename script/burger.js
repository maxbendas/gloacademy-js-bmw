const menuElem = document.querySelector('.menu')
const humburgerElem = document.querySelector('.humburger-menu')
const menuList = document.querySelector('.menu-list')

const toggleMenu = ()=>{
    menuElem.classList.toggle('menu-active')
    humburgerElem.classList.toggle('humburger-menu-active')
}

humburgerElem.addEventListener('click', toggleMenu)

menuList.addEventListener('click', (e)=>{
    const target = e.target
    if (target.classList.contains('menu-list__link')){
        toggleMenu()
    }
})