const SPEED = 0.5
const scrolled = event => {
    event.preventDefault()
    const target = event.target
    if (target.matches('[href^="#"]')) {
        let start = 0
        const pageY = window.pageYOffset
        const hash = target.getAttribute('href')
        if (hash === '#') return
        const elem = document.querySelector(hash)
        const cordinateElem = elem.getBoundingClientRect().top
        console.log(cordinateElem)

        const step = time => {
            if (!start) start = time
            const progress = time - start

            const r = (cordinateElem < 0 ?
                Math.max(pageY - progress / SPEED, pageY + cordinateElem) :
                Math.min(pageY + progress / SPEED, pageY + cordinateElem))

            window.scrollTo(0, r)

            if (r < pageY + cordinateElem) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
    }
}

document.body.addEventListener('click', scrolled)


// const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])')
//
// smoothScrollElems.forEach(link=>{
//     link.addEventListener('click', (e)=>{
//         e.preventDefault()
//         const id = link.getAttribute('href').substring(1)
//         document.getElementById(id).scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// })