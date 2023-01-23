import React, { useState } from "react";
import * as E from "./EmptyCard.styles";
import CreateRoomInfoModal from "../../../Components/Modal/CreateRoomInfoModal";

function CreateCard() {
  const [isModalStatus, setIsModalStatus] = useState(false);

  const handleCreateModal = e => {
    e && setIsModalStatus(!isModalStatus);
  };

  return (
    <E.CreateCardLayout>
      <E.CraeteCard onClick={handleCreateModal}>
        <E.CraeteButton>+</E.CraeteButton>
      </E.CraeteCard>
      {isModalStatus && <CreateRoomInfoModal />}
    </E.CreateCardLayout>
  );
}

export default CreateCard;
