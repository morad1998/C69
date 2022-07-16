export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\myoffer\\[offerId].svelte"),
	() => import("..\\..\\src\\routes\\offers.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"offers": [[0, 4], [1]],
	"myoffer/[offerId]": [[0, 3], [1]]
};