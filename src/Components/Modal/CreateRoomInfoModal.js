import React from "react";
import * as M from "./CreateRoomInfoModal.styles";

function CreateRoomInfoModal() {
  return (
    <M.ModalOutLine>
      <M.CreateRoomHead>방 생성</M.CreateRoomHead>
      {CREATEROOMINFO.map(({ id, title, list }) => (
        <div key={id}>
          {title !== "카테고리" ? (
            <M.title>
              {title}:
              <input />
            </M.title>
          ) : (
            <M.SelectCategori>
              <div>카테고리 :</div>
              <div>
                <select>
                  {list.map(({ id, sub }) => (
                    <option key={id}>{sub}</option>
                  ))}
                </select>
              </div>
            </M.SelectCategori>
          )}
        </div>
      ))}
      <M.CreateButtonList>
        <M.CreateButton>생성</M.CreateButton>
        <M.CreateButton>취소</M.CreateButton>
      </M.CreateButtonList>
    </M.ModalOutLine>
  );
}

export default CreateRoomInfoModal;

const CREATEROOMINFO = [
  {
    id: 1,
    title: "카테고리",
    list: [
      { id: 1, sub: "중식" },
      { id: 2, sub: "한식" },
      { id: 3, sub: "일식" },
      { id: 4, sub: "인스턴스" },
      { id: 5, sub: "양식" },
    ],
  },
  { id: 2, title: "방제목" },

  { id: 3, title: "인원수" },
];
