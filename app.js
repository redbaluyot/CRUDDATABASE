// Import Firebase modules
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfNvbLz8SY5wu4JJyo-hYUJ2bIkR2whHA",
  authDomain: "taskmanagerapp-b0491.firebaseapp.com",
  projectId: "taskmanagerapp-b0491",
  storageBucket: "taskmanagerapp-b0491.firebasestorage.app",
  messagingSenderId: "1060832504372",
  appId: "1:1060832504372:web:4ae3343cdf99f608cf7861",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore collection
const tasksRef = collection(db, "tasks");

// CREATE a Task
async function createTask(title, status) {
  const docRef = await addDoc(tasksRef, {
    title,
    status,
  });
  console.log("Task Created with ID:", docRef.id);
}

// READ All Tasks
async function getAllTasks() {
  const snapshot = await getDocs(tasksRef);
  snapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
}

// UPDATE a Task
async function updateTask(id, newStatus) {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, { status: newStatus });
  console.log("Task Updated");
}

// DELETE a Task
async function deleteTask(id) {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
  console.log("Task Deleted");
}

// --- Example usage ---
window.createTask = createTask;
window.getAllTasks = getAllTasks;
window.updateTask = updateTask;
window.deleteTask = deleteTask;
