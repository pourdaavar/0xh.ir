<script lang="ts">
	import { app } from '$appConfig';

	const brand = app.title;

	export let title: string = brand;
	export let description = app.desc;
	export let image = app.image;
	export let url = app.url;
	export let twitterHandle = '@realhosssein';
</script>

<svelte:head>
	<title>{title ? title : brand}</title>
	<meta name="description" content={description} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${title} - ${brand}`} />
	<meta property="og:site_name" content={brand} />
	<meta property="og:description" content={description} />
	<meta property="og:image" name="og:image" content={image} />
	<meta name="og:url" content={url} />

	<meta name="twitter:site" content={twitterHandle} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${title} - ${brand}`} />
	<meta name="twitter:description" content={description} />
</svelte:head>
