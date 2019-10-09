function uniqPath(startingElement)
{
    let uniqSelector;
    const currentElement = document.querySelector(startingElement)
    let parentElement;
    const pathArr = [];
    for (var element = currentElement; element.tagName !== "BODY"; element = parentElement) {
        parentElement = element.parentNode
        pathArr.push(getSelector(parentElement))
    }
    function getSelector(parentElement) {
        let selector;
        if (parentElement.id) {
            selector = `#${parentElement.id}`
        } else if (parentElement.className) {
            selector = `${parentElement.tagName}.${parentElement.className}`
        } else {
            selector = parentElement.tagName
        }
        return selector
    }
    pathArr.reverse().push(getSelector(currentElement))
    uniqSelector = pathArr.join(' > ')
    console.log(uniqSelector)
    return uniqSelector
}
console.log(document.querySelectorAll(uniqPath('.item')))
