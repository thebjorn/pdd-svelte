<script lang="ts">
    import { triggerPostMoveFlash } from '@atlaskit/pragmatic-drag-and-drop-flourish/trigger-post-move-flash';
    import { extractClosestEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
    import { reorderWithEdge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge';
    import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
    import Task from '$lib/Task.svelte';
    import { is_task_data, type TTask } from './taskutils.svelte.ts';

    type Props = {
        tasks: TTask[];
    };
    let {tasks = $bindable()}: Props = $props();

    $effect(() => {
        return monitorForElements({
            canMonitor({ source }) {
                return is_task_data(source.data);
            },
            onDrop({ location, source }) {
                const target = location.current.dropTargets[0];
                if (!target) {
                    return;
                }

                const sourceData = source.data;
                const targetData = target.data;

                if (!is_task_data(sourceData) || !is_task_data(targetData)) {
                    return;
                }

                const indexOfSource = tasks.findIndex((task) => task.id === sourceData.taskId);
                const indexOfTarget = tasks.findIndex((task) => task.id === targetData.taskId);

                if (indexOfTarget < 0 || indexOfSource < 0) {
                    return;
                }

                const closestEdgeOfTarget = extractClosestEdge(targetData);

                tasks = reorderWithEdge({
                    list: tasks,
                    startIndex: indexOfSource,
                    indexOfTarget,
                    closestEdgeOfTarget,
                    axis: 'vertical',
                })
                const element = document.querySelector(`[data-task-id="${sourceData.taskId}"]`);
                if (element instanceof HTMLElement) {
                    triggerPostMoveFlash(element);
                }
            },
        });
    });
</script>

<div class="pt-6 my-0 mx-auto w-[420px]">
    <div class="flex flex-col gap-2 border border-solid rounded p-2">
        {#each tasks as task}
            <Task task={task} />
        {/each}
    </div>
</div>
