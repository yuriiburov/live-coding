const listElem = document.querySelector('.list');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// algo
// get task id
// find task by id
// update task
// re-render
function updateTaskHandler(e) {
  if (!e.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const { id } = e.target.dataset;

  const task = tasks.find((el) => el.id === Number(e.target.dataset.id));

  // REALLY BAD
  // let newStatus;
  // if (task.done) {
  //   newStatus = true;
  // } else {
  //   newStatus = false;
  // }

  // BAD
  // let newStatus = task.done ? false : true;

  task.done = !task.done;

  renderTasks(tasks);
}

const res = listElem.addEventListener('click', updateTaskHandler);

// get task text
// create task
// update tasks
// re-render
function createTaskHandler() {
  const inputElem = document.querySelector('.task-input');
  const str = inputElem.value;
  if (str === '') {
    return;
  }
  inputElem.value = '';
  tasks.push({ text: str, done: false, id: tasks.length + 1 });
  renderTasks(tasks);
}

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', createTaskHandler);
