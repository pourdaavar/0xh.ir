<script>
	import MoonIcon from '$components/icons/MoonIcon.svelte';
	import SunIcon from '$components/icons/SunIcon.svelte';

	import { browser } from '$app/environment';
	let darkMode = false;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<footer class="py-10 print:hidden">
	<div class="flex justify-between">
		<div>
			<p class="text-sm text-neutral-500 dark:text-neutral-400">© 2023 Hossein Pourdavar</p>

			<p class="text-xs text-neutral-500 dark:text-neutral-400">
				Inspired by
				<a
					class="hover:underline hover:decoration-primary-400 hover:text-primary-500"
					href="https://git.io/hugo-congo"
					target="_blank"
					rel="noopener noreferrer">Congo</a
				>
			</p>
		</div>

		<div
			class="text-sm cursor-pointer text-neutral-700 dark:text-neutral hover:text-primary-600 dark:hover:text-primary-400 "
		>
			<button
				id="appearance-switcher"
				class="w-12 h-12"
				type="button"
				title="Switch to dark appearance"
				on:click={handleSwitchDarkMode}
			>
				<span class="inline dark:hidden">
					<SunIcon />
				</span>
				<span class="hidden dark:inline">
					<MoonIcon />
				</span>
			</button>
		</div>
	</div>
</footer>
