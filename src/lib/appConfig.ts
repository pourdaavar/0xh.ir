import { PUBLIC_BASE_URL } from '$env/static/public';

export const app = {
	title: '0xh.ir | Daily Tech Stuff',
	desc: 'description',
	url: PUBLIC_BASE_URL,
	image:
		'https://raw.githubusercontent.com/svelte-society/sveltesociety.dev/main/static/images/metatag.png',

	navList: [
		{
			id: 1,
			link: '/a1',
			title: 'Article 1'
		},
		{
			id: 2,
			link: '/a2',
			title: 'Article 2x'
		}
	]
};
