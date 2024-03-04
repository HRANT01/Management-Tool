export interface I_TaskItem {
    taskName: string
    deadline: string
    priority: string
    status: string
    department: string
}

export interface I_TasksState {
    teamMembers: any;
    currentTasks: I_TaskItem[];
    taskToEdit: any
}