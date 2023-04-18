const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Cler yard',
        completed: false
    }, {
        text: 'film course',
        completed: false
    }],
    getTasksToDo() {
        // console.log(this.tasks);
        return this.tasks.filter((task) => task.completed === false);
        // console.log(toDoList);
    }
};

console.log(tasks.getTasksToDo())