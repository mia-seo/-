import React from "react";
import * as M from "./CreateRoomInfoModal.styles";

function CreateRoomInfoModal({ fn }) {
  return (
    <M.ModalOutLine>
      <M.CreateRoomHead>방 생성</M.CreateRoomHead>
      <div>
        <M.title>
          방 제목:
          <input />
        </M.title>
        <M.UnderInfo>
          <M.ChoiceUserCount>
            인원 수 :
            <input />명
          </M.ChoiceUserCount>

          <M.SelectCategori>
            <div>카테고리 :</div>
            <div>
              <select>
                {CREATEROOMINFO.map(({ id, sub }) => (
                  <option key={id}>{sub}</option>
                ))}
              </select>
            </div>
          </M.SelectCategori>
        </M.UnderInfo>
      </div>
      <M.CreateButtonList>
        <M.CreateButton>생성</M.CreateButton>
        <M.DeleteButton onClick={fn}>취소</M.DeleteButton>
      </M.CreateButtonList>
    </M.ModalOutLine>
  );
}

export default CreateRoomInfoModal;

const CREATEROOMINFO = [
  { id: 1, sub: "미정" },
  { id: 2, sub: "중식" },
  { id: 3, sub: "한식" },
  { id: 4, sub: "일식" },
  { id: 5, sub: "인스턴스" },
  { id: 6, sub: "양식" },
];
