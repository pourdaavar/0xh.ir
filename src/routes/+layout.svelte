<script>
	import Header from '$components/Header/index.svelte';
	import '../styles.css';
</script>

<div
	id="app"
	class="scroll-smooth"
>
	<div class="flex flex-col h-screen px-6 m-auto text-lg leading-7 bg-neutral text-neutral-900 sm:px-14 md:px-24 lg:px-32 dark:bg-neutral-800 dark:text-neutral max-w-7xl">
		<Header />
		<slot />
	</div>
</div>
