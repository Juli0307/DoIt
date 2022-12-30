import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../App";
import { Task } from './Task'

import styles from "./Tasks.module.css";

interface Props {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Tasks({ tasks, onComplete, onDelete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50} />
            <div>
              <p>You don't have tasks registered yet</p>
              <br/>
              <span>Create tasks and organize your to-do items</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}