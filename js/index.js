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
    buttonOrder: document.querySelector('.button_order'),
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
        this.orderButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModel();
        });
        this.buttonOrder.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModel();
        });
    }
}
modelobject.render()

const modalobjectTel = {
    modalContainer: document.getElementsByClassName('modalContainer')[0],
    modalButtonTel: document.getElementById('modalButtonTel'),
    buttonTel: document.getElementsByClassName('button_tel')[0],
    closeModel() {
        this.modalContainer.style.display = 'none';
    },
    openModel() {
        this.modalContainer.style.display = 'block'
    },
    render() {
        this.modalContainer.addEventListener('click', (e) =>
            e.target === e.currentTarget && this.closeModel())
        this.modalButtonTel.addEventListener('click', () => this.closeModel());
        this.buttonTel.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModel();
        });
    }
}
modalobjectTel.render()

const modalobjectDetails = {
    modalContainer: document.getElementsByClassName('modalContainerDetails')[0],
    modalButtonDet: document.getElementById('modalButtonDet'),
    buttonDetail: document.getElementsByClassName('btn_with-arrow')[0],
    closeModel() {
        this.modalContainer.style.display = 'none';
    },
    openModel() {
        this.modalContainer.style.display = 'block'
    },
    render() {
        this.modalContainer.addEventListener('click', (e) =>
            e.target === e.currentTarget && this.closeModel())
        this.modalButtonDet.addEventListener('click', () => this.closeModel());
        this.buttonDetail.addEventListener('click', (e) => {
            e.preventDefault();
            this.openModel();
        });
    }
}
modalobjectDetails.render()

function dispatch(action, container, data = state) {
    switch (action) {
        case 'aside':
            data.aside.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <li class="menu"><a class="${item.class}" href="">${item.title}</a></li>
                `)
            )
            break;
        case 'section4':
            data.section3.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <div class="flex">
                    <img src="./img/content/section4/${item.url}" alt="">
                    <div class="column">
                        <h5>${item.title}</h5>
                        <p>${item.text}</p>
                    </div>
                </div>
                `))
            break;
        case 'section5':
            data.section4.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <div class="img_container">
                    <a href="${item.href}" target="_blank">
                        <img src="./img/content/section_img/${item.url}" alt="">
                    </a>
                </div>
            `))
            break;
        case 'section6':
            data.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <li>${item}</li>
            `))
            break;
        case 'modalDetails':
            data.section4.forEach((item, index) =>
                container.insertAdjacentHTML('beforeend', `
                <div class="modalLinkContainer">
                    <a class="modalDetailsLink" href="${item.href}" target="_blank">
                        Сайт №${index + 1} - ${item.href}
                    </a>
                </div>
            `))
            break;
        case "section2":
            data.section2.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                <div class="colum">
                    <h4>${item.text}</h4>
                    <img src="./img/content/section1/${item.url}" alt="">
                    <button class="btn">Детальніше</button>
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
dispatch('section2', section2_wrap);
const modalDetails = document.querySelector('.modalDetails');
dispatch('modalDetails', modalDetails);

const btnBanner = document.querySelectorAll('.btn_banner');

btnBanner.forEach(item => {
    item.addEventListener('click', () => {
        alert(item.textContent);
    })
})

const services = document.getElementById('services');
const works = document.getElementById('works');
const feedbacks = document.getElementById('feedbacks');
const contacts = document.getElementById('contacts');
const curses = document.getElementById('curses');
const goTop = document.getElementById('gotop');
const footerLinkFull = document.querySelector('.link_full');
const footerLinkWorks = document.querySelector('.link_works');
const footerLinkFeedback = document.querySelector('.link_feedback');
const footerLinkCurse = document.querySelector('.link_curses');

const menuFull = document.querySelector('.fullMenu');
const menuWorks = document.querySelector('.worksMenu');
const menuFeedback = document.querySelector('.feedbackMenu');
const menuCurses = document.querySelector('.cursesMenu');
const menuContacts = document.querySelector('.contactsMenu')

footerLinkFull.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = services.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
});

footerLinkWorks.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = works.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
});

footerLinkFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = feedbacks.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
});

footerLinkCurse.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = curses.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
});

goTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
})

menuFull.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = services.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
    aside.closeAside();
});

menuWorks.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = works.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
    aside.closeAside();
});

menuFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = feedbacks.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
    aside.closeAside();
});

menuCurses.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = curses.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
    aside.closeAside();
});

menuContacts.addEventListener('click', (e) => {
    e.preventDefault();
    const rect = contacts.getBoundingClientRect();
    window.scrollTo({
        top: window.scrollY + rect.top,
        behavior: 'smooth',
    });
    aside.closeAside();
});