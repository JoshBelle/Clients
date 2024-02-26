export const createClientHeader = () => {
    const header = document.createElement('header');
    const logo = document.createElement('a');
    const logoImg = document.createElement('img');
    const form = document.createElement('form');
    const input = document.createElement('input');
    const container = document.createElement('div');
    const wrapper = document.createElement('div');
    const inner = document.createElement('div');
    input.placeholder = 'Введите запрос';

    header.classList.add('header');
    container.classList.add('container', 'header__container');
    logo.classList.add('logo', 'header__logo');
    logo.classList.add('logo__img');
    logoImg.src = 'img/logo.svg';
    logoImg.alt = 'Logotype clients';
    form.classList.add('header__form');
    input.classList.add('header__input');
    wrapper.classList.add('header-wrapper');
    inner.classList.add('header__inner');

    header.append(container);
    logo.append(logoImg);
    form.append(input);
    container.append(logo, form);

    return header;
};
