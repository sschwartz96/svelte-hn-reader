import { writable } from 'svelte/store';

export const currentCategory = writable('');
export const currentCategoryItemIds = writable([]);
export const currentCategoryItems = writable([]);
