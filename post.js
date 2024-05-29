
/**
 * Question: Missing !!!
 * Re-call: Write function handle input & post (button)
 * which allow to post "un-blank" comment to a list of comments
 *
 * Solution
 */
function setup() {
    // Write your code here.

    // define constants for magic strings
    const ID_COMMENT_LIST = 'commentList';
    const ID_COMMENT_INPUT = 'comment';
    const ID_COMMENT_BUTTON = 'postComment';

    // get elements in the document
    const ulElem = document.getElementById(ID_COMMENT_LIST);
    const commentInputElem = document.getElementById(ID_COMMENT_INPUT);
    const commentBtnElem = document.getElementById(ID_COMMENT_BUTTON);

    // checking if we get elements correctly
    if (!ulElem || !commentInputElem || !commentBtnElem) {
        console.error('incorrect Element ID provided');
        return;
    }

    // register a click handler for the comment button
    commentBtnElem.onclick = () => {
        // getting comment text and check whether it is empty or not
        const commentValue = commentInputElem.value;
        if (!commentValue || commentValue.trim().length === 0) {
            return;
        }
        // create new LI element and append to the UL comment list
        const liElem = document.createElement('li');
        // does not use html inside of LI element with innerHTML, but innerText
        // i.e., input comment like this: <b>test html tag</b>
        liElem.innerText = commentValue;
        ulElem.appendChild(liElem);
        commentInputElem.value = '';
    }
}

// Example case.
document.body.innerHTML = `
<ul id='commentList'>
</ul>
<form>
  <input type='text' id='comment'/>
  <input type='button' id='postComment' value='Post'/>
</form>`;

setup();

document.getElementById("comment").value = "test";
document.getElementById("postComment").click();
console.log(document.body.innerHTML);