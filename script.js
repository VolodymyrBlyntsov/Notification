const notify = document.querySelector('.notify');
const btn = document.querySelector('.btn');
let add = addEventListener('click', active);

function active() {
	let add = Number(notify.getAttribute('data-count') || 0);
	if(add === 0) {
		notify.classList.add('add-number');
	}
	if(add !== 99) {
		notify.setAttribute('data-count', add + 1);
	}
}
