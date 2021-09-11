/* global data */
/* exported data */
var imgInput = document.querySelector('#photo-url');
var imgPlaceholder = document.querySelector('.photoUrl');
var formEntry = document.querySelector('#form');
var titleInput = document.querySelector('#title');
var notes = document.querySelector('#notes');
var editingEntry;

imgInput.addEventListener('input', function (event) {
  imgPlaceholder.setAttribute('src', event.target.value);
});

var saveFunction = function (event) {
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
  var $ul = document.querySelector('.journal-entry');
  $ul.prepend(addEntry(entry));
  var $masterdiv2 = document.querySelector('.masterdiv2');
  var $masterdiv1 = document.querySelector('.masterdiv1');
  $masterdiv2.classList.remove('hidden');
  $masterdiv1.classList.add('hidden');
};

var updateFunction = function (event) {
  event.preventDefault();
  editingEntry.image = imgInput.value;
  editingEntry.title = titleInput.value;
  editingEntry.notes = notes.value;
  var $masterdiv2 = document.querySelector('.masterdiv2');
  var $masterdiv1 = document.querySelector('.masterdiv1');
  $masterdiv2.classList.remove('hidden');
  $masterdiv1.classList.add('hidden');
};

function addEntry(entry) {
  var $list = document.createElement('li');
  var $imgDiv = document.createElement('div');
  var $img = document.createElement('img');
  var $textDiv = document.createElement('div');
  var $header = document.createElement('h3');
  var $paragraph1 = document.createElement('p');
  var $penIcon = document.createElement('i');
  $list.setAttribute('id', entry.nextEntryId);
  $imgDiv.setAttribute('class', 'column-half');
  $img.setAttribute('src', entry.image);
  $textDiv.setAttribute('class', 'column-half');
  $header.setAttribute('class', 'entry-header');
  $penIcon.setAttribute('class', 'fas fa-pen pen-icon');
  var $headerText = document.createTextNode(entry.title);
  var $textNode1 = document.createTextNode(entry.notes);
  $list.appendChild($imgDiv);
  $imgDiv.appendChild($img);
  $list.appendChild($textDiv);
  $textDiv.appendChild($header);
  $textDiv.appendChild($paragraph1);
  $header.appendChild($headerText);
  $header.appendChild($penIcon);
  $paragraph1.appendChild($textNode1);
  $penIcon.addEventListener('click', function (event) {
    event.preventDefault();
    data.editing = entry.nextEntryId;
    var $masterdiv2 = document.querySelector('.masterdiv2');
    var $masterdiv1 = document.querySelector('.masterdiv1');
    $masterdiv2.classList.add('hidden');
    $masterdiv1.classList.remove('hidden');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].nextEntryId === data.editing) {
        editingEntry = data.entries[i];
      }
    }
    imgInput.value = editingEntry.image;
    titleInput.value = editingEntry.title;
    notes.value = editingEntry.notes;
    imgPlaceholder.setAttribute('src', imgInput.value);
    formEntry.addEventListener('submit', updateFunction);
    var $deleteEntry = document.querySelector('.deleteentry');
    $deleteEntry.classList.remove('hidden');
  });
  return $list;
}

var $deleteEntry = document.querySelector('.deleteentry');
$deleteEntry.addEventListener('click', function (event) {
  var $modal = document.querySelector('.modal-overlay');
  $modal.classList.remove('hidden');
});

var $cancel = document.querySelector('.cancel');
$cancel.addEventListener('click', function (event) {
  var $modal = document.querySelector('.modal-overlay');
  $modal.classList.add('hidden');
});

var $confirmDelete = document.querySelector('.confirm');
$confirmDelete.addEventListener('click', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    if (data.editing === data.entries[i].nextEntryId) {
      data.entries.splice(i, 1);
    }
  }
  var $modal = document.querySelector('.modal-overlay');
  $modal.classList.add('hidden');
  var $masterdiv2 = document.querySelector('.masterdiv2');
  var $masterdiv1 = document.querySelector('.masterdiv1');
  $masterdiv1.classList.add('hidden');
  $masterdiv2.classList.remove('hidden');
  var $deletingList = document.getElementById(`${data.editing}`);
  $deletingList.remove();
});

for (const entry of data.entries) {
  var $ul = document.querySelector('.journal-entry');
  $ul.appendChild(addEntry(entry));
}

window.addEventListener('DOMContentLoaded', function (event) {
  for (const entry of data.entries) {
    addEntry(entry);
  }
});

var $newButton = document.querySelector('.new');
$newButton.addEventListener('click', function (event) {
  event.preventDefault();
  var $masterdiv2 = document.querySelector('.masterdiv2');
  var $masterdiv1 = document.querySelector('.masterdiv1');
  $masterdiv2.classList.add('hidden');
  $masterdiv1.classList.remove('hidden');
  formEntry.addEventListener('submit', saveFunction);
});

/* */
