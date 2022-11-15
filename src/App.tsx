import React, { useState } from "react";
import Menu from "./components/Menu";
import Modal from "./components/Modal/Modal";
import PageModal from "./components/PageModal";
import "./style.css";

function App() {
  const [modalActive, setActive] = useState(false);
  return (
    <div>
      {/* <Menu /> */}
      <PageModal setActive={setActive} modalActive={modalActive} />
      <Modal modalActive={modalActive} setActive={setActive}>
        Йоу Камон
      </Modal>
    </div>
  );
}

export default App;
