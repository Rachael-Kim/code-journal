/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('DOMContentLoaded', function (event) {
  var storageData = JSON.parse(localStorage.getItem('data'));
  if (storageData.entries === null) {
    storageData.entries = data.entries;
  } else {
    data.entries = storageData.entries;
  }
  for (const entry of storageData.entries) {
    // eslint-disable-next-line no-undef
    addEntry(entry);
  }
});

window.addEventListener('beforeunload', function (event) {
  localStorage.setItem('data', JSON.stringify(data));
});
