const CounterModule = (
    function () {
        let count = 0;

        return {
            increment: function () {
                return ++count;
            },
            decrement: function () {
                return --count;
            },
            getCount: function () {
                return count;
            }
        }
    }
)();

console.log(CounterModule.increment());
console.log(CounterModule.increment());
console.log(CounterModule.getCount());
console.log(CounterModule.decrement());


const ToDoModule = (
    function () {
        let tasks = [];

        function render() {
            const list = document.getElementById('taskList');
            list.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;
                li.onclick = () => removeTask(index);
                list.appendChild(li);
            })
        }

        function addTask() {
            const input = document.getElementById('taskInput');
            const task = input.value.trim();
            if (task) {
                tasks.push(task);
                input.value = '';
                render();
            }
        }

        function removeTask(index) {
            tasks.splice(index, 1);
            render();
        }

        return { addTask }

    }
)();