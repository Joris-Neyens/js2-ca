export function message(style, message, target) {

    const container = document.querySelector(target);

    container.innerHTML = `<p class="${style}">${message}</p>`

}