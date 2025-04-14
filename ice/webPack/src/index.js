import listBuilder from  "./app/animals/list.js";
import animalBuilder from  "./app/animals/index.js";
import twitter from './asset/twitter.svg';
import contactBuilder from './app/views/contact.ejs';
import aboutBuilder from './app/views/about.ejs';


var appObj = {
    recordPage: { page: 1, perPage: 10 },
    name: null,
    animalBuilder: function (app) {
        container.innerHTML = '';
        container.append(animalBuilder(app).element);
    },
    listBuilder: function (app) {
        container.innerHTML = '';
        container.append(listBuilder(app).element);
    },
    contactBuilder: function (app) {
        container.innerHTML = contactBuilder();
    },
    aboutBuilder: function (app) {
        container.innerHTML = aboutBuilder();
    }
};

let container = document.querySelector('main');

const path = location.pathname;
if (path === '/contact') {
    container.innerHTML = contactBuilder();
} else if (path === '/about') {
    container.innerHTML = aboutBuilder();
} else if (path === '/animal') {
    container.append(animalBuilder(appObj).element);
} else {
    const list = listBuilder(appObj);
    container.append(list.element); // default to list
}

let footImgs = document.querySelector('.ms-3 a');
const svgElement = document.createElement('img');
svgElement.src = twitter;
svgElement.width = 24; // width in pixels
svgElement.height = 24; // height in pixels
footImgs.appendChild(svgElement);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            location.reload(); // reload to trigger the correct view without full refresh
        }
    });
});
