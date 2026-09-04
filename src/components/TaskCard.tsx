import { type TaskCardProps } from "../libs/Todolist";

export default function TaskCard({
  title,
  description,
  isDone,
}: TaskCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <h5
              className={
                isDone
                  ? "card-title m-0 text-decoration-line-through"
                  : "card-title m-0"
              }
            >
              {title}
            </h5>
          </div>
          <div className="col-lg-4">
            <p className="card-text m-0 text-muted">{description}</p>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success w-100">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
