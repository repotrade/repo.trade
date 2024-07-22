window.htmx = require('htmx.org');
import('htmx.org/dist/ext/client-side-templates');
window.Handlebars = require("handlebars");

// Collapse
window.addEventListener('click', (ev) => {
    const elm = ev.target.nextSibling;
    if (elm && elm.classList.contains("collapse")) {
        collapse(elm, 'toggle');
    }
}, false);
const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
};
const collapse = (target, cmd) => {
    const targets = Array.from(document.querySelectorAll(".collapse"));
    targets.forEach(t => {
        if (t != target)
            t.classList[fnmap["hide"]]('show');
    });
    target.classList[fnmap[cmd]]('show');
}
