import { onMount } from "svelte";

export class IsMobile {
	#current = $state(false);

	constructor() {
		onMount(() => {
			const mql = window.matchMedia("(max-width: 767px)");
			this.#current = mql.matches;
			const handler = (e: MediaQueryListEvent) => {
				this.#current = e.matches;
			};
			mql.addEventListener("change", handler);
			return () => mql.removeEventListener("change", handler);
		});
	}

	get current() {
		return this.#current;
	}
}
