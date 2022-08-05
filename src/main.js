import App from './App.svelte';

const AppTodo = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default AppTodo;
