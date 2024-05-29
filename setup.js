/**
 * Question:
 * Write an "setup" function that registers a click handler and implements the following logic:
 * - When clicked the button with the ID "btn" is hidden.
 * - One second after click, the button reappears.
 */

/**
 * Solution:
 */
function setup() {
    // Write your code here.
    // define magic strings
    const ID_BTN = 'btn';
    const STYLE_DISPLAY_NONE = 'none';
    // using display style inherit (or block, inline-block) for browsers compatible
    const STYLE_DISPLAY_INHERIT = 'inherit';
    const TIMEOUT_MILLISECOND = 1000;

    // get button element
    const btnElem = document.getElementById(ID_BTN);

    // only register the click handler if the button element is existing
    if (btnElem) {
        btnElem.onclick = function() {

            this.style.display = STYLE_DISPLAY_NONE;

            // setTimeout to re-display the button after 1 second,
            setTimeout(() => this.style.display = STYLE_DISPLAY_INHERIT, TIMEOUT_MILLISECOND);
        }
    }
}

// Example case
document.body.innerHTML = `abc<button type="button" id="btn">Hide Me!</button>`;

setup();

var button = document.getElementById('btn');
button.click();
console.log(button.style.display != 'none');