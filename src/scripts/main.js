import '../style/style.scss'

import initHeader from './header'
import initSelect from './select'
import initVideo from './video'
import initAccordion from './accordion'
import initOrbit from './orbit'
import initSlider from './slider'

document.addEventListener('DOMContentLoaded', () => {
    initHeader()
    initSelect()
    initVideo()
    initAccordion()
    initOrbit()
    initSlider()
})
