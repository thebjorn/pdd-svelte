export type TStatus = 'todo' | 'in-progress' | 'done';
export type TTask = { id: string; content: string; status: TStatus };

const task_data_key = Symbol('task')

export type TTaskData = { [task_data_key]: true; taskId: TTask['id'] };

export const get_task_data = (task: TTask): TTaskData => {
    return {
        [task_data_key]: true,
        taskId: task.id,
    }
}

export const is_task_data = (data: Record<string | symbol, unknown>): data is TTaskData => {
    return data[task_data_key] === true;
}