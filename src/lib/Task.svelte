<script lang="ts">
    import {
        attachClosestEdge,
        extractClosestEdge,
    } from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge'
    import type { Edge } from '@atlaskit/pragmatic-drag-and-drop-hitbox/types'
    import {
        draggable,
        dropTargetForElements,
    } from '@atlaskit/pragmatic-drag-and-drop/element/adapter'
    import { pointerOutsideOfPreview } from '@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview'
    import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview'
    import Portal from '$lib/Portal.svelte'
    // import invariant from 'tiny-invariant'
    import DropIndicator from '$lib/DropIndicator.svelte'
    import DragHandle from './DragHandle.svelte'
    import DragPreview from './DragPreview.svelte'
    import { get_task_data, is_task_data } from './taskutils.svelte.ts'
    import Status from './Status.svelte'

    interface TaskState {
        type: 'idle' | 'preview' | 'is-dragging' | 'is-dragging-over'
        container?: HTMLElement
        closestEdge?: Edge | null
    }


    import type { TTask } from './taskutils.svelte.ts'
    
    type Props = {
        task: TTask
    }
    let { task }: Props = $props()

    let element: HTMLDivElement | undefined
    const idle: TaskState = { type: 'idle' }
    let state = $state(idle)

    $effect(() => {
        if (element === undefined) return;
        draggable({
            element,
            getInitialData() {
                // return getTaskData(task)
                return get_task_data(task)
            },
            onGenerateDragPreview({ nativeSetDragImage }) {
                setCustomNativeDragPreview({
                    nativeSetDragImage,
                    getOffset: pointerOutsideOfPreview({
                        x: '16px',
                        y: '8px',
                    }),
                    render({ container }) {
                        state = { type: 'preview', container }
                    },
                })
            },
            onDragStart() {
                state = { type: 'is-dragging' }
            },
            onDrop() {
                state = idle
            },
        })

        dropTargetForElements({
            element,
            canDrop({ source }) {
                // not allowing dropping on yourself
                if (source.element === element) {
                    return false
                }
                // only allowing tasks to be dropped on me
                return is_task_data(source.data)
                // return source.element.hasAttribute('data-task-id')
            },
            getData({ input }) {
                const data = get_task_data(task)
                return attachClosestEdge(data, {
                    element: element!,
                    input,
                    allowedEdges: ['top', 'bottom'],
                })
            },
            getIsSticky() {
                return true
            },
            onDragEnter({ self }) {
                const closestEdge = extractClosestEdge(self.data)
                state = { type: 'is-dragging-over', closestEdge }
            },
            onDrag({ self }) {
                const closestEdge = extractClosestEdge(self.data)

                // Only need to update state if nothing has changed.
                // Prevents re-rendering.
                if (state.type !== 'is-dragging-over' || state.closestEdge !== closestEdge) {
                    state = { type: 'is-dragging-over', closestEdge }
                }
            },
            onDragLeave() {
                state = idle
            },
            onDrop() {
                state = idle
            },
        })
    })
</script>

<div class="relative">
    <div
        data-task-id={task.id}
        bind:this={element}
        class:opacity-40={state.type === 'is-dragging'}
        class={`flex text-sm bg-white 
                flex-row items-center 
                border border-solid rounded p-2 pl-0 
                hover:bg-slate-100 hover:cursor-grab`}
    >
        <DragHandle />
        <span class="truncate flex-grow flex-shrink">{task.content}</span>
        <Status status={task.status} />
    </div>

    {#if state.type === 'is-dragging-over' && state.closestEdge}
        <DropIndicator edge={state.closestEdge} gap={'8px'} />
    {/if}
</div>
{#if state.type === 'preview'}
    <Portal target={state.container}>
        <DragPreview {task} />
    </Portal>
{/if}
