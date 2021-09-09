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
  addEntry(entry);
  var $masterdiv2 = document.querySelector('.masterdiv2');
  var $masterdiv1 = document.querySelector('.masterdiv1');
  $masterdiv2.classList.remove('hidden');
  $masterdiv1.classList.add('hidden');
});

// issue 2

function addEntry(entry) {
  var $list = document.createElement('li');
  var $imgDiv = document.createElement('div');
  var $img = document.createElement('img');
  var $textDiv = document.createElement('div');
  var $header = document.createElement('h3');
  var $paragraph1 = document.createElement('p');
  $imgDiv.setAttribute('class', 'column-half');
  $img.setAttribute('src', entry.image);
  $textDiv.setAttribute('class', 'column-half');
  $header.setAttribute('class', 'entry-header');
  var $headerText = document.createTextNode(entry.title);
  var $textNode1 = document.createTextNode(entry.notes);
  $list.appendChild($imgDiv);
  $imgDiv.appendChild($img);
  $list.appendChild($textDiv);
  $textDiv.appendChild($header);
  $textDiv.appendChild($paragraph1);
  $header.appendChild($headerText);
  $paragraph1.appendChild($textNode1);

  var $ul = document.querySelector('.journal-entry');
  $ul.appendChild($list);
}

var $newButton = document.querySelector('.new');
$newButton.addEventListener('click', function (event) {
  event.preventDefault();
  var $masterdiv2 = document.querySelector('.masterdiv2');
  var $masterdiv1 = document.querySelector('.masterdiv1');
  $masterdiv2.classList.add('hidden');
  $masterdiv1.classList.remove('hidden');
});
