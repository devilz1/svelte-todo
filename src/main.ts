import App from './App.svelte';

const AppTodo = new App({
	target: document.body,
	hydrate: true,
	props: {
		name: 'world'
	}
});

export default AppTodo;
