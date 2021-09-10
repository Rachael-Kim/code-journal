/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};
if (localStorage.getItem('data') !== null) {
  data = JSON.parse(localStorage.getItem('data'));
}

window.addEventListener('beforeunload', function (event) {
  localStorage.setItem('data', JSON.stringify(data));
});
