function toggleManu(){
    document.querySelector("#navbar").classList.toggle('manu-active')
    document.querySelector("#manu-close").classList.toggle('manu-active')
    document.querySelector("#manu-open").classList.toggle('manu-active')
}
document.querySelector("#humburger-manu").oneclick = toggleManu;