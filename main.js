//elements
const burger = document.getElementById('burger')
const mobileMenuContainer = document.getElementsByClassName('menu-container')[0]
const mobileMenu = mobileMenuContainer.children[0]
const mobileMenuList = mobileMenu.querySelectorAll('nav ul >li')
const linksSvgList = mobileMenu.children[0].querySelectorAll('ul li ul li svg')
const h1 = document.querySelector('h1')
const sponsorsSvgList = document.querySelectorAll('main section ul li svg')

//functions
const setViewboxSvg = (list) => {
    list.forEach(svg => {
        const width = svg.getAttribute('width'), height = svg.getAttribute('height')
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
    })
}

const setTitleH1 = (h1) => {
    const text = 'Make remote work'
    const mobileMenuContainer = document.getElementsByClassName('menu-container')[0]

    if (this.screen.width >= 1100) {
        const words = text.split(' '), [word1, word2, word3] = words
        h1.innerHTML = `${word1}<br>${word2} ${word3}`
        mobileMenuContainer.style.height = ''
    }
}

//actions
setViewboxSvg(linksSvgList); setViewboxSvg(sponsorsSvgList); this.onresize = setTitleH1(h1)

burger.addEventListener('click', () => {
    const iconeTreeLines = burger.children[0], iconeCross = burger.children[1]
    const domHeight = this.document.documentElement.scrollHeight

    if (mobileMenu.classList.contains('move-menu')) {
        iconeTreeLines.style.display = 'block'
        iconeCross.style.display = 'none'
        mobileMenuContainer.style.display = 'none'
        mobileMenu.style.left = 'var(--100percent)'
        mobileMenu.classList.remove('move-menu')
    } else {
        iconeCross.style.display = 'block'
        iconeTreeLines.style.display = 'none'
        mobileMenuContainer.style.height = `${domHeight}px`
        mobileMenuContainer.style.display = 'flex'
        mobileMenu.classList.add('move-menu')
        mobileMenu.addEventListener('animationend', () => {
            mobileMenu.style.left = 'calc(var(--100percent) * .35)'
        })
    }
})

mobileMenuList.forEach(li => {
    if (li.children[0].nodeName === 'BUTTON') {
        const btn = li.children[0]

        btn.addEventListener('click', () => {
            const links = li.children[1]
            const svgdown = li.children[0].children[1].children[0], svgup = li.children[0].children[1].children[1]

            if (svgdown.classList.contains('none')) {
                li.style.paddingBottom = '1em'
                btn.style.marginBottom = 0
                links.style.display = 'none'
                svgdown.classList.remove('none')
                svgup.classList.add('none')
            } else {
                li.style.paddingBottom = 0
                btn.style.marginBottom = '1em'
                links.style.display = 'block'
                svgdown.classList.add('none')
                svgup.classList.remove('none')
            }
        })
    }
})
