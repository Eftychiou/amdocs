import Panel from "./Panel";
export default function PanelList({
  setSelectedPanel,
  selectedPanel,
  panelList,
}) {
  return (
    <ul className='panelsList'>
      {panelList &&
        panelList.map((data) => (
          <Panel
            key={data.id}
            data={data}
            setSelectedPanel={setSelectedPanel}
            selectedPanel={selectedPanel}
          />
        ))}
    </ul>
  );
}
