// 1. Change the text content of an element dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('text').textContent = "The text content has been changed!";
});

// 2. Modify CSS styles via JavaScript
document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

// 3. Add a new element when a button is clicked
document.getElementById('addElementBtn').addEventListener('click', function() {
    let newElement = document.createElement('p');
    newElement.textContent = 'This is a new dynamically added element.';
    document.getElementById('content').appendChild(newElement);
});

// 4. Remove the last element in the content section
document.getElementById('removeElementBtn').addEventListener('click', function() {
    let contentSection = document.getElementById('content');
    if (contentSection.lastElementChild) {
        contentSection.removeChild(contentSection.lastElementChild);
    }
});
