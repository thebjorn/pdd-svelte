<script>
    // "/src/main.ts"
    import DragHandle from "$lib/DragHandle.svelte"
    import ToDo from "$lib/ToDo.svelte"
    import Done from "$lib/Done.svelte";
    import InProgress from "$lib/InProgress.svelte";
    import {dnd} from "$lib/pdd";
</script>

<div class="mx-auto my-0 pt-6 w-[420px]">
    <div class="flex flex-col gap-2 p-2 border border-solid rounded">
        
        <div class="relative">
            <div data-task-id="task-0" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Organize a team-building event
                </span>
                <ToDo />
            </div>
        </div>
        
        <div class="relative">
            <div data-task-id="task-1" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Create and maintain office inventory
                </span>
                <InProgress />
            </div>
        </div>
        
        <div class="relative">
            <div data-task-id="task-2" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Update company website content
                </span>
                <Done />
            </div>
        </div>
        
        <div class="relative">
            <div data-task-id="task-3" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Plan and execute marketing campaigns
                </span>
                <ToDo />
            </div>
        </div>
        
        <div class="relative">
            <div data-task-id="task-4" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Coordinate employee training sessions
                </span>
                <Done />
            </div>
        </div>
        
        <div class="relative">
            <div data-task-id="task-5" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Manage facility maintenance
                </span>
                <Done />
            </div>
        </div>
        
        <div class="relative">
            <div data-task-id="task-6" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Organize customer feedback surveys
                </span>
                <ToDo />
            </div>
        </div>
        
        <div class="relative">
            <div data-task-id="task-7" use:dnd
                class="flex flex-row items-center bg-white hover:bg-slate-100 p-2 pl-0 border border-solid rounded text-sm hover:cursor-grab"
                draggable="true" data-drop-target-for-element="true">
                <DragHandle />
                <span class="flex-grow flex-shrink truncate" data-task-content>
                    Coordinate travel arrangements
                </span>
                <InProgress />
            </div>
        </div>
    </div>
</div>


<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>