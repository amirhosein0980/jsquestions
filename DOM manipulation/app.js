function elementor(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        throw new Error(`No element found for selector: ${selector}`);
    }
    return {
        attribute(key, value) {
            element.setAttribute(key, value);
            return this;
        },
        on(eventName, handler) {
            element.addEventListener(eventName, handler);
            return this;
        },
        click(handler) {
            element.addEventListener('click', handler);
            return this;
        },
        text(content) {
            element.textContent = content;
            return this;
        },
        class(className) {
            if (Array.isArray(className)) {
                className.forEach(cls => element.classList.add(cls));
            } else {
                element.classList.add(className);
            }
            return this;
        },
        removeClass(className) {
            element.classList.remove(className);
            return this;
        }
    };
}

elementor('#some-id')
  .click(() => console.log('HI'))
  .text('Click Me')
  .attribute('title', 'a click button')
  .on('mouseenter', () => console.log('Mouse Entered'))
  .class(['text-bold', 'class2']);