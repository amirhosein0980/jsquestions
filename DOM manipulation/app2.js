function render(obj) {
    const el = document.createElement(obj.name);
    if (obj.attributes) {
        for (const attr of obj.attributes) {
            el.setAttribute(attr.key, attr.value);
        }
    }
    if (obj.children) {
        for (const child of obj.children) {
            if (typeof child === 'string') {
                el.appendChild(document.createTextNode(child));
            } else {
                el.appendChild(render(child));
            }
        }
    }
    return el;
}

const inputObj = {
    name: 'div',
    attributes: [{key: 'class', value: 'container'}, {key: 'id', value: 'some-id'}],
    children: [
      "Salam",
      {
        name: 'p',
        attributes: [{ key: 'class', value: 'text-bold' }],
        children: ["Some Text"]
      }
    ]
  };
  
  document.body.appendChild(render(inputObj));  