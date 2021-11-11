// Utility functions shared across multiple files


// getTimeAgo takes unix time in seconds and give the appropriate "hours ago" text
export function getTimeAgo(time: number): string {
	const sub = new Date().getTime() - time * 1000;
	const minutes = Math.round(sub / 60000);
	let a = minutes;
	let b = 'm';

	if (minutes >= 518400) {
		a = Math.floor(minutes / 518400);
		b = 'y';
	} else if (minutes >= 43200) {
		a = Math.floor(minutes / 43200);
		b = 'mon';
	} else if (minutes >= 1440) {
		a = Math.floor(minutes / 1440);
		b = 'd';
	} else if (minutes >= 60) {
		a = Math.floor(minutes / 60);
		b = 'h';
	}

	return a + b + ' ' + 'ago';
}
