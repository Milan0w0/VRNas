export default function initHeader() {
    const root = '[data-js-header]'
    const overlay = '[data-js-header-overlay]'
    const burgerButton = '[data-js-header-burger-button]'
    
    const isActive = 'is-active'
    const isLock = 'is-lock'

    const headerElement = document.querySelector(root)
    if (!headerElement) return

    const overlayElement = headerElement.querySelector(overlay)
    const burgerButtonElement = headerElement.querySelector(burgerButton)

    burgerButtonElement.addEventListener('click', onBurgerButtonClick)

    function onBurgerButtonClick(event) {
        event.preventDefault()
        burgerButtonElement.classList.toggle(isActive)
        overlayElement.classList.toggle(isActive)
        document.documentElement.classList.toggle(isLock)
    }
}