<script lang="ts">
    import TaskList from "$lib/TaskList.svelte";
    import type {TTask} from "$lib/taskutils.svelte.ts";

    let tasks: TTask[] = $state([
        { id: 'task-0', content: 'Organize a team-building event', status: 'todo' },
        { id: 'task-1', content: 'Create and maintain office inventory', status: 'in-progress' },
        { id: 'task-2', content: 'Update company website content', status: 'done' },
        { id: 'task-3', content: 'Plan and execute marketing campaigns', status: 'todo' },
        { id: 'task-4', content: 'Coordinate employee training sessions', status: 'done' },
        { id: 'task-5', content: 'Manage facility maintenance', status: 'done' },
        { id: 'task-6', content: 'Organize customer feedback surveys', status: 'todo' },
        { id: 'task-7', content: 'Coordinate travel arrangements', status: 'in-progress' },
    ])
</script>

<div class="mx-auto my-0 pt-6 w-[420px]">
    <div class="flex flex-col gap-2 p-2 border border-solid rounded">
        <TaskList bind:tasks={tasks} />
    </div>
</div>


<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>