import {createStore} from 'vuex'
import {I_TaskItem, I_TasksState} from "@/store/interfaces";


export default createStore({
    state: {
        teamMembers: [],
        currentTasks: [],
        taskToEdit: null
    },
    getters: {
        getUsers: state => {
            return state.teamMembers;
        },
        getCurrentTasks: state => {
            return state.currentTasks
        },
        getTaskToEdit: state => {
            return state.taskToEdit
        }
    },
    mutations: {
        M_SET_TeamMembers(state, teamMembers) {
            state.teamMembers = teamMembers;
        },
        M_Create_Task(state: I_TasksState, taskInfo: any) {
            state.currentTasks = taskInfo
            localStorage.setItem('tasks', JSON.stringify(state.currentTasks));
        },
        M_Remove_Task(state, taskName) {
            state.currentTasks = state.currentTasks.filter((task: any) => task.taskName !== taskName);
            localStorage.setItem('tasks', JSON.stringify(state.currentTasks));
        },
        M_Edit_Task(state, taskUpdatedInfo) {
            const localStorageTasksRaw = localStorage.getItem('tasks');
            const localStorageTasks = localStorageTasksRaw ? JSON.parse(localStorageTasksRaw) : [];

            const taskIndex = localStorageTasks.findIndex((task: any) => task.id === taskUpdatedInfo.id);

            if (taskIndex !== -1) {
                localStorageTasks.splice(taskIndex, 1, taskUpdatedInfo);

                localStorage.setItem('tasks', JSON.stringify(localStorageTasks));

                state.taskToEdit = null;
            }
        },
        M_Find_Task_By_Name(state, taskName) {
            const localStorageTasksRaw = localStorage.getItem('tasks');
            const localStorageTasks = localStorageTasksRaw ? JSON.parse(localStorageTasksRaw) : [];
            state.taskToEdit = localStorageTasks.find((task: any) => task.taskName === taskName);
        },
        M_Interrupt_Edit(state) {
            state.taskToEdit = null
        },

    },
    actions: {
        A_Create_Task({commit}, taskInfo) {
            commit('M_Create_Task', taskInfo);
        },
        A_Remove_Task({commit, state}, taskName) {
            commit('M_Remove_Task', taskName);
        },
        A_Find_Task_By_Name({commit}, task) {
            commit('M_Find_Task_By_Name', task.taskName)
        },
        A_Interrupt_Edit({commit}) {
            commit('M_Interrupt_Edit')
        },
        A_Edit_Task({commit}, task) {
            commit('M_Edit_Task', task)
        }

    },
})
