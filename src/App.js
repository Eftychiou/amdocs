import PanelList from "./components/PanelList";
import PanelDetails from "./components/PanelDetails";
import Backdrop from "./components/shared/Backdrop";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [panelList, setPanelList] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.nextjs-shop.com/shop/test`)
      .then(({ data }) => {
        setPanelList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <PanelList
        panelList={panelList}
        selectedPanel={selectedPanel}
        setSelectedPanel={setSelectedPanel}
      />
      <PanelDetails
        panelList={panelList}
        selectedPanel={selectedPanel}
        setSelectedPanel={setSelectedPanel}
      />
      <Backdrop
        selectedPanel={selectedPanel}
        setSelectedPanel={setSelectedPanel}
      />
    </>
  );
}

export default App;
