export default function Backdrop({ selectedPanel, setSelectedPanel }) {
  if (selectedPanel)
    return <div onClick={() => setSelectedPanel(null)} className='backdrop' />;
  else return null;
}
