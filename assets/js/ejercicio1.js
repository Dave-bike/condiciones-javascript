let border = false 
function changeColor() {
    let image = document.getElementById('image-id')
    if (border) {
        image.classList.remove('image-border')
        border = false
    } else {
        image.classList.add('image-border')
        border = true
    }
}