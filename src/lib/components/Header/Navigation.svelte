<script lang="ts">
	import type { NavigationItem } from '$types';

	export let items: NavigationItem[];
</script>

<nav>
	<ul class="flex flex-col list-none sm:flex-row">
		{#each items as li (li.id)}
			<li class="mb-1 sm:mb-0 sm:mr-7 sm:last:mr-0">
				<a
					href={li.link}
					title="Posts"
					class="decoration-primary-500 hover:underline hover:decoration-2 hover:underline-offset-2"
					>{li.title}</a
				>
			</li>
		{/each}
	</ul>
</nav>
