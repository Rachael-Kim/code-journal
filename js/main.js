/* global data */
/* exported data */

var imgInput = document.querySelector('#photo-url');
var imgPlaceholder = document.querySelector('.photoUrl');
var formEntry = document.querySelector('#form');
var titleInput = document.querySelector('#title');
var notes = document.querySelector('#notes');

imgInput.addEventListener('input', function (event) {
  imgPlaceholder.setAttribute('src', event.target.value);
});

formEntry.addEventListener('submit', function (event) {
  event.preventDefault();
  var entry = {
    title: titleInput.value,
    image: imgInput.value,
    notes: notes.value,
    nextEntryId: data.nextEntryId
  };
  data.entries.unshift(entry);
  data.nextEntryId++;
  imgPlaceholder.setAttribute('src', './images/placeholder-image-square.jpg');
  formEntry.reset();
  localStorage.setItem('data', JSON.stringify(data));
});
