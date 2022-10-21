export const utilService = {
	cToF,
	fToC,
	debounce,
	timeAgo,
	makeId,
	getWeekDay,
};
function cToF(celsius) {
	return (celsius * 9) / 5 + 32;
}

function fToC(farenheit) {
	return ((farenheit - 32) * 5) / 9;
}

function debounce(func, wait = 500) {
	let timeout;

	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

function timeAgo(input) {
	const date = input instanceof Date ? input : new Date(+input);
	const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: 'auto' });
	const ranges = {
		years: 3600 * 24 * 365,
		months: 3600 * 24 * 30,
		weeks: 3600 * 24 * 7,
		days: 3600 * 24,
		hours: 3600,
		minutes: 60,
		seconds: 1,
	};
	const secondsElapsed = (date.getTime() - Date.now()) / 1000;
	// let key: keyof typeof ranges;
	for (let key in ranges) {
		if (ranges[key] < Math.abs(secondsElapsed)) {
			const delta = secondsElapsed / ranges[key];
			let time = formatter.format(Math.round(delta), key);
			if (time.includes('in')) {
				time = time.replace('in ', '');
				time = time.replace('ago', '');
				time += ' ago';
			}
			return time; //? time : 'Just now'
		}
	}
}

function makeId(length = 5) {
	var text = '';
	var possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

function getWeekDay(date) {
	const weekDays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
	const newDate = date instanceof Date ? date : new Date(date);
	return weekDays[newDate.getDay()];
}

export function binarySearch(arr, target, returnIndex = false, comprator) {
	if (typeof comprator !== 'function')
		comprator = (a, b) => {
			if (a === b) return 1;
			if (a < b) return -1;
		};
	let [start, end] = [0, arr.length - 1];
	while (start <= end) {
		const mid = Math.trunc((start + end) / 2);
		const res = comprator(target, arr[mid]);
		if (res > 0) return returnIndex ? mid : arr[mid];
		if (res < 0) end = mid - 1;
		else start = mid + 1;
	}
	if (returnIndex) return -1;
}

export function insertionSort(arr, comprator) {
	if (typeof comprator !== 'function') comprator = (a, b) => (a > b ? 1 : -1);
	for (let i = 0; i < arr.length; i++) {
		const cur = arr[i];
		for (var j = i - 1; j >= 0 && comprator(arr[j], cur) > 0; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = cur;
	}
	return arr;
}
