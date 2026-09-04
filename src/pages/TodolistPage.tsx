import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import TaskInput from "../components/TaskInput";
import type { FooterProps } from "../libs/Footer";
import type { SideBarProps } from "../libs/Sidebar";
import type { TaskCardProps } from "../libs/Todolist";

const userFooter: FooterProps = {
  studentId: 680610705,
  fullName: "Phuphing Chompubang",
  year: "2026"
}
const userSideBar: SideBarProps = {
  username: "Phuphing",
  type: "admin"
}
const title = "Todo List";
const tasks: TaskCardProps[] = [
  {
    id: "1",
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: "2",
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: "3",
    description: "Push project to GitHub Pages",
    title: "Deploy app",
    isDone: true,
  },
];


export default function TodolistPage() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* ── 2) Sidebar (รับ props userName, type) ─────────────────────────── */}
        <div className="col-2 p-0">
          <Sidebar username={userSideBar.username} type={userSideBar.type}></Sidebar>
        </div>
        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ── 1) Header (ไม่รับ props) ────────────────────────────────────── */}
          <Header></Header>
          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">{title}</h2>
              <p className="text-center text-muted">ทั้งหมด {tasks.length} งาน</p>
              {/* ── 3) TaskInput (ไม่รับ props) ──────────────────────────── */}
              <TaskInput></TaskInput>
              {/* ── 4) Task (3 แถว) → แยกเป็น <TaskCard /> แล้ว .map() ─────── */}
              {
                tasks.map((task) => (
                  <TaskCard key={task.id} title={task.title} id={task.id} description={task.description} isDone={task.isDone}>
                  </TaskCard>
                ))
              }
            </div>
          </main>
          {/* ── 5) Footer (รับ props year, fullName, studentId) ─────────────── */}
          <Footer fullName={userFooter.fullName} studentId={userFooter.studentId} year={userFooter.year}></Footer>
        </div>
      </div >
    </div >
  );
}
