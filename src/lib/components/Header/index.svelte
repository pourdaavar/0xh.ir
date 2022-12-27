<script>
	import Brand from './Brand.svelte';
	import Navigation from './Navigation.svelte';
	import { app } from '$appConfig';

	const title = app.title;
	const items = app.navList;
</script>

<header
	class="flex justify-between py-6 font-semibold sm:items-center sm:py-10 text-neutral-900 dark:text-neutral print:hidden"
>
	<Brand {title} />
	<Navigation {items} />
</header>
