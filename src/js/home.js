export function generateHome() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const fragment = document.createDocumentFragment();
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const slogan = document.createElement('h3');
    const caption = document.createElement('p');

    home.id = 'home';

    heading.textContent = 'CS170mg';
    slogan.innerHTML = 'The coffee you know and love<br>with just that little bit more';
    caption.textContent = 'It all begins with a bean, a love, a passion.';

    [heading, slogan, caption].forEach((section) => home.appendChild(section));

    content.appendChild(fragment);
}
