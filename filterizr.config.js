module.exports = {
    animationDuration: 0.8, // in seconds
    controlsSelector: '', // Selector for custom controls
    delay: 8, // Transition delay in ms
    delayMode: 'progressive', // 'progressive' or 'alternate'
    easing: 'ease-in-out',
    filter: 'all', // Initial filter
    filterOutCss: { // Filtering out animation
        opacity: 0,
        transform: 'scale(0)'
    },
    filterInCss: { // Filtering in animation
        opacity: 1,
        transform: 'scale(1)'
    },
    gutterPixels: 0, // Items spacing in pixels
    layout: 'sameWidth' // See layouts
}