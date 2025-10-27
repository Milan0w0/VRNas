export default function initVideo() {
    const root = '[data-js-video]'
    const videoPlayer = '[data-js-video-player]'

    const isActive = 'is-active'
    const isAnimating = 'is-animating'

    const videoBlocks = document.querySelectorAll(root)
    if (!videoBlocks.length) return

    videoBlocks.forEach(videoBlock => {
        const videoElement = videoBlock.querySelector(videoPlayer)

        videoBlock.addEventListener('click', () => {
            videoBlock.classList.add(isAnimating)
            setTimeout(() => {
                videoBlock.classList.add(isActive)
                videoElement.controls = true
                videoElement.play()
            }, 300)
        })

        document.addEventListener('click', (event) => {
            if (!videoBlock.contains(event.target)) {
                videoBlock.classList.remove(isActive)
                videoElement.controls = false
                videoElement.pause()
                videoElement.currentTime = 0
                videoElement.load()

                setTimeout(() => {
                    videoBlock.classList.remove(isAnimating)
                }, 100)
            }
        })
    })
}
