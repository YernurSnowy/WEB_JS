
const tasks = loadTasks();

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return savedTasks;
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, done: false });
    saveTasks();
    updateTaskList();
    taskInput.value = '';
  }
}

function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.onchange = () => toggleTaskDone(index);
    li.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    taskText.style.textDecoration = task.done ? 'line-through' : 'none';
    li.appendChild(taskText);

    taskList.appendChild(li);
  });

  saveTasks();
}

function toggleTaskDone(index) {
  tasks[index].done = !tasks[index].done;
  updateTaskList();
}

function deleteCompletedTasks() {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].done) {
      tasks.splice(i, 1);
    }
  }
  updateTaskList();
  saveTasks();
}


// Countdown Timer
javascriptvar
countDownDate;
var x;

function setCustomTime() {
  var customTime = document.getElementById("custom-time").value;

  // Check if the input contains 'm' for minutes or 'h' for hours
  if (customTime.match(/\d+[mM]/)) {
    var minutes = parseInt(customTime);
    countDownDate = new Date(Date.now() + minutes * 60000).getTime();
  } else if (customTime.match(/\d+[hH]/)) {
    var hours = parseInt(customTime);
    countDownDate = new Date(Date.now() + hours * 3600000).getTime();
  } else {
    alert("Invalid input. Please use '12m' for minutes or '1h' for hours.");
    return;
  }

  clearInterval(x);
  updateCountdown();
  x = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME IS FINISHED";
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  }
}

function hideShow() {
  // Get the #top div element
  const topDiv = document.getElementById('top');

  // Toggle the display of the #top div element
  topDiv.style.display = topDiv.style.display === 'block' ? 'none' : 'block';
}
