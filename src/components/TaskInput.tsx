export default function TaskInput() {
  return (
    <div className="d-flex my-3">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Insert a task here.."
      />
      <button className="btn btn-primary px-4">Add</button>
    </div>
  );

}
