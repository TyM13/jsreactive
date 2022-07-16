function makeorange(details) {
    details[`target`][`style`][`backgroundColor`] = `orange`
}

let header = document.getElementById(`header_title`);
header.addEventListener(`click`, makeorange);


function new_tag(details) {
    details[`target`][`outerHTML`] = `<p>now a p tag not a h2 tag</p>`
}

let main = document.getElementById(`main_title`);
main.addEventListener(`dblclick`, new_tag);


function new_ptags(details) {
    for (let i = 0; i < 3; i++) {
        details[`target`][i] += `<p>p tag before, </p>` [`outerHTML`]
    }
}

let footer = document.getElementById(`footer_title`);
footer.addEventListener(`mouseover`, new_ptags)