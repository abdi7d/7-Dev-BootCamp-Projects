
// ===============================
// ⚙️ client/script.js
// ===============================
const API = 'http://localhost:5000/api/tasks';

async function fetchTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;

    if (task.completed) li.classList.add('completed');

    li.onclick = () => toggleTask(task.id);

    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.onclick = (e) => {
      e.stopPropagation();
      deleteTask(task.id);
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById('taskInput');

  await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: input.value })
  });

  input.value = '';
  fetchTasks();
}

async function toggleTask(id) {
  await fetch(`${API}/${id}`, { method: 'PUT' });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
  fetchTasks();
}

fetchTasks();

