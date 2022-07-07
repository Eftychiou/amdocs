export default function PanelDetails({ selectedPanel, panelList }) {
  return (
    <ul className={selectedPanel ? "moreDetails on" : "moreDetails off"}>
      {selectedPanel &&
        panelList &&
        panelList[selectedPanel - 1]?.details?.map((line, index) => (
          <li key={index}>{line}. </li>
        ))}
    </ul>
  );
}
