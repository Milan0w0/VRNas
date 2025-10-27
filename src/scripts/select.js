export default function initSelect() {
    const root = '[data-js-select]'
    const list = '[data-js-select-list]'
    const link = '[data-js-select-link]'
    const isActive = 'is-active'

    const selectElements = document.querySelectorAll(root)

    if (!selectElements.length) return

    selectElements.forEach(select => {
        const listElement = select.querySelector(list)
        const linkElements = select.querySelectorAll(link)

        select.addEventListener('click', event => {
            event.stopPropagation()

            document.querySelectorAll(root).forEach(otherSelect => {
                const otherList = otherSelect.querySelector(list)
                if (otherSelect !== select) {
                    otherList.classList.remove(isActive)
                }
            })

            listElement.classList.toggle(isActive)
        })

        linkElements.forEach(linkEl => {
            linkEl.addEventListener('click', event => {
                event.stopPropagation()
                listElement.classList.remove(isActive)
            })
        })
    })

    document.addEventListener('click', event => {
        selectElements.forEach(select => {
            const listElement = select.querySelector(list)
            if (!select.contains(event.target)) {
                listElement.classList.remove(isActive)
            }
        })
    })
}