const getSelector = element => {
    let selector;
    const parentElement = element.parentNode;
    const allChildrenParentElement = [...parentElement.children];

    if (element.id) {
        selector = `#${element.id}`
    } else if (element.className) {
        selector = `${element.tagName}.${element.className}`
    } else {
        selector = element.tagName
    }
    if (allChildrenParentElement.length > 1) {
        selector = `${selector}:nth-child(${allChildrenParentElement.indexOf(element)+1})`
    }
    return selector
};

const uniqPath = elem => {
    let uniqSelector;
    const currentElement = elem;
    let parentElement;
    const pathArr = [];
    for (var element = currentElement; element.tagName !== "BODY"; element = parentElement) {
        pathArr.push(getSelector(element));
        parentElement = element.parentNode;
    }
    uniqSelector = pathArr.reverse().join(' > ');
    alert(uniqSelector);
    console.log(document.querySelectorAll(uniqSelector));
};

