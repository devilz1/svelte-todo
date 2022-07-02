<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    const removeTodo = () => {
        dispatch('remove', index);
    }

    export let todoItem;
    export let index;
</script>

<li class="item">{todoItem}<span class="remove" on:click={removeTodo}>X</span></li>

<style>
    .item {
        padding: 8px;
        margin-bottom: 6px;
        background-color: mediumpurple;
        color: white;
        display: flex;
        justify-content: space-between;
    }

    .remove {
        margin-left: 8px;
        cursor: pointer;
    }
</style>
