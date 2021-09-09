/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('DOMContentLoaded', function (event) {
  var storageEntries = JSON.parse(localStorage.getItem('entries'));
  if (storageEntries === null) {
    storageEntries = data.entries;
  } else {
    data.entries = storageEntries;
  }
  for (const entry of storageEntries) {
    // eslint-disable-next-line no-undef
    addEntry(entry);
  }
});

window.addEventListener('beforeunload', function (event) {
  localStorage.setItem('entries', JSON.stringify(data.entries));
});
