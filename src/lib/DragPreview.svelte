<script lang="ts">
    import { type TTask } from './taskutils.svelte.ts'

    type Props = {
        task: TTask
    }
    let {task}: Props = $props()
</script>

<div class="border-solid rounded p-2 bg-white">{task.content}</div>
