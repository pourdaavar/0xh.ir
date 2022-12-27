<script>
	import Header from '$components/Header/index.svelte';
	import Footer from '$components/Footer/index.svelte';
	import '../styles.css';
</script>

<div id="app">
	<Header />
	<slot />
	<Footer />
</div>
