// pega as tasks do localStorage ou inicializa como array vazio
function getTasks() {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
}

// salva as tasks no localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// cria uma nova tarefa
export async function Create(obj) {
  try {
    const tasks = getTasks();
    const newTask = { ...obj, id: Date.now(), completed: false };
    tasks.push(newTask);
    saveTasks(tasks);
    return newTask;
  } catch (error) {
    console.log(error);
  }
}

// lista todas as tarefas
export async function ListAll() {
  try {
    return getTasks();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// deleta uma tarefa pelo id
export async function DeleteTask(id) {
  try {
    let tasks = getTasks();
    tasks = tasks.filter(t => t.id !== id);
    saveTasks(tasks);
  } catch (error) {
    console.log(error);
  }
}

// marca ou desmarca uma tarefa como completa
export async function CompleteTask(id, value) {
  try {
    let tasks = getTasks();
    tasks = tasks.map(t => t.id === id ? { ...t, completed: value } : t);
    saveTasks(tasks);
    return tasks.find(t => t.id === id);
  } catch (error) {
    console.log(error);
  }
}

// deleta todas as tarefas completadas
export async function DeleteAll() {
  try {
    let tasks = getTasks();
    tasks = tasks.filter(t => !t.completed);
    saveTasks(tasks);
  } catch (error) {
    console.log(error);
  }
}
