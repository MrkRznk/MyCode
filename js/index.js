import state from "./state.js";
console.log(state)
const aside = {
    open: document.getElementsByClassName('open')[0],
    container: document.getElementsByTagName('aside')[0],
    close: document.getElementsByClassName('close')[0],
    openAside(e) {
        console.log(e.target)
        this.container.style.display = 'block';
        console.log(this.container.style)
    },
    closeAside() {
        this.container.style.display = 'none';
    },
    render() {
        console.log(this.open)
        this.open.addEventListener('click', (e) => this.openAside(e))
        this.close.addEventListener('click', () => this.closeAside())
    }
}
aside.render()
const modelobject = {
    modelContainer: document.getElementsByClassName('modelContainer')[0],
    modelButtonInfo: document.getElementById('modelButtonInfo'),
    orderButton: document.getElementsByClassName('orderButton')[0],
    closeModel() {
        this.modelContainer.style.display = 'none';
    },
    openModel() {
        this.modelContainer.style.display = 'block'
    },
    render() {
        this.modelContainer.addEventListener('click', (e) =>
            e.target === e.currentTarget && this.closeModel())
        this.modelButtonInfo.addEventListener('click', () => this.closeModel());
        this.orderButton.addEventListener('click', () => this.openModel());
    }
}
modelobject.render()

function dispatch(action, container, data = state) {
    switch (action) {
        case 'aside':
            data.aside.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <li class="menu"><a href="#"><a>${item.title}</a></li>

                `)
            )
            break;
        case 'section4':
            data.section3.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <div class="flex">
                    <img src="./img/content/section4/${item.url}" alt="">
                    <div class="column">
                        <h5>${item.h5}</h5>
                        <p>${item.p}</p>
                    </div>
                </div>
                `))
            break;
        case 'section5':
            data.section4.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <img src="./img/content/section_img/${item.url}" alt="">
            `))
            break;
        case 'section6':
            data.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <li>${item}</li>>
            `))
            break;
        case "section2_wrap":
            data.section1.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <div class="colum">
                <div class="cercle"></div>
                <h4>${item}</h4>
                <button class="btn">Детальніше</button>
                <img src="./img/content/section1/${item.url}" alt="">
            </div>
            `))
        default:
            break;
    }
}
const nav = document.getElementsByClassName('nav')[0];
dispatch('aside', nav);
const section4 = document.getElementsByClassName('section4_wrap')[0];
dispatch('section4', section4);
const menu = Array.from(document.getElementsByClassName('menu')),
    section = Array.from(document.getElementsByClassName('section'));
const section5_wrap = document.getElementsByClassName('section5_wrap')[0];
dispatch('section5', section5_wrap);
const section_6_ul = document.getElementsByClassName('section_6_ul')[0];
const section_6_ol = document.getElementsByClassName('section_6_ol')[0];
dispatch('section6', section_6_ul, state.section5.ul);
dispatch('section6', section_6_ol, state.section5.ol);
const section2_wrap = document.getElementsByClassName('section2_wrap')[0];
dispatch('section2_wrap', section2_wrap);

