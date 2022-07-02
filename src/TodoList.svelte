<script>
    import TodoItem from "./TodoItem.svelte";

    let newTodo = '';
    let todoList = [];

    const addAffair = () => {
        if (todoList && newTodo) {
            todoList = [...todoList, newTodo];
            newTodo = '';
        }
    }

    const handleKeyDown = (e) => {
        e.code === 'Enter' && addAffair();
    }

    const removeTodo = (event) => {
        todoList.splice(event.detail, 1);
        todoList = todoList;
    }

    $: todoLength = todoList.length;
</script>

<div class="tl">
    <label for="input-todo">Название дела</label>
    <input on:keydown={handleKeyDown} bind:value={newTodo} id="input-todo" type="text" placeholder="Press write...">

    <button on:click={addAffair}>Add</button>

    <ul class="list">
        {#each todoList as todo, i}
            <TodoItem on:remove={removeTodo} todoItem={todo} index={i} />
        {/each}
    </ul>

    <hr>

    <p>Count: {todoLength}</p>
</div>

<style>
    .list {
        margin: 0;
        padding: 0;
    }

    .tl {
        text-align: left;
        width: 400px;
        margin: 0 auto;
    }

    .tl label {
        margin-bottom: 15px;
    }
</style>
