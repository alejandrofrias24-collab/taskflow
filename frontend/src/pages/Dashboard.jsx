import { useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardList,
  FaPlus,
  FaSearch,
  FaSpinner,
  FaTasks,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import KanbanBoard from "../components/tasks/KanbanBoard";
import TaskModal from "../components/tasks/TaskModal";
import { useAuth } from "../hooks/useAuth";
import { createTask, getTasks } from "../services/taskService";
import "../styles/dashboard.css";

const getErrorMessage = (error) =>
  error.response?.data?.message || "No se pudieron cargar las tareas.";

export default function Dashboard() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);

  const loadTasks = async () => {
    try {
      setError("");
      const data = await getTasks();
      setTasks(Array.isArray(data) ? data : []);
    } catch (loadError) {
      setError(getErrorMessage(loadError));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const visibleTasks = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("es");
    if (!query) return tasks;
    return tasks.filter((task) =>
      [task.titulo, task.descripcion, task.prioridad]
        .filter(Boolean)
        .some((value) => value.toLocaleLowerCase("es").includes(query))
    );
  }, [search, tasks]);

  const stats = [
    {
      label: "Tareas en el tablero",
      value: tasks.length,
      icon: <FaClipboardList />,
      tone: "violet",
    },
    {
      label: "Por comenzar",
      value: tasks.filter((task) => task.estado === "Pendiente").length,
      icon: <FaTasks />,
      tone: "blue",
    },
    {
      label: "En progreso",
      value: tasks.filter((task) => task.estado === "En Progreso").length,
      icon: <FaSpinner />,
      tone: "amber",
    },
    {
      label: "Completadas",
      value: tasks.filter((task) => task.estado === "Completada").length,
      icon: <FaCheckCircle />,
      tone: "green",
    },
  ];

  const handleCreateTask = async (task) => {
    try {
      await createTask(task);
      setTaskModalOpen(false);
      await loadTasks();
    } catch (createError) {
      setError(getErrorMessage(createError));
    }
  };

  const displayName =
    user?.nombre || user?.email?.split("@")[0] || "equipo";
  const firstName = displayName.trim().split(/\s+/)[0];
  const today = new Intl.DateTimeFormat("es", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  return (
    <MainLayout>
      <div className="dashboard-page">
        <section className="dashboard-welcome">
          <div>
            <span className="dashboard-eyebrow">TU ESPACIO DE TRABAJO</span>
            <h1>Hola, {firstName} <span aria-hidden="true">👋</span></h1>
            <p>Organiza el trabajo y sigue el avance de tus tareas.</p>
          </div>
          <div className="welcome-actions">
            <span className="today-label">{today}</span>
            <button
              className="primary-action"
              type="button"
              onClick={() => setTaskModalOpen(true)}
            >
              <FaPlus />
              Nueva tarea
            </button>
          </div>
        </section>

        <section className="dashboard-stats" aria-label="Resumen de tareas">
          {stats.map((stat) => (
            <article className="dashboard-stat" key={stat.label}>
              <span className={"stat-icon " + stat.tone}>{stat.icon}</span>
              <div>
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
              </div>
            </article>
          ))}
        </section>

        <section className="board-panel">
          <div className="board-heading">
            <div>
              <div className="board-title-line">
                <h2>Mi tablero</h2>
                <span className="task-total">{tasks.length} tareas</span>
              </div>
              <p>Mueve las tarjetas entre columnas para actualizar su estado.</p>
            </div>
            <div className="board-tools">
              <label className="board-search">
                <FaSearch aria-hidden="true" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Buscar tareas"
                  aria-label="Buscar tareas"
                />
              </label>
              <Link className="all-tasks-link" to="/tasks">
                Ver tareas <FaArrowRight />
              </Link>
            </div>
          </div>

          {error && <div className="dashboard-error" role="alert">{error}</div>}

          {loading ? (
            <div className="board-loading">
              <FaSpinner className="loading-spinner" />
              Cargando tu tablero…
            </div>
          ) : (
            <KanbanBoard
              tasks={visibleTasks}
              reload={loadTasks}
              onMoveError={(moveError) => setError(getErrorMessage(moveError))}
            />
          )}
        </section>
      </div>

      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setTaskModalOpen(false)}
        onSubmit={handleCreateTask}
      />
    </MainLayout>
  );
}
