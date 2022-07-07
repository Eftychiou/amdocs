import { capitalizeString } from "./lib/tools";
export default function Panel({ setSelectedPanel, selectedPanel, data }) {
  const { id, title, category, intro } = data;
  return (
    <div
      onClick={() => setSelectedPanel(id)}
      className={selectedPanel === id ? "panel selected" : "panel"}>
      <div className='top'>
        <h1>{title}</h1>
      </div>
      <div className='bottom'>
        <h3>{capitalizeString(category)}</h3>
        <p>{intro}</p>
      </div>
    </div>
  );
}
