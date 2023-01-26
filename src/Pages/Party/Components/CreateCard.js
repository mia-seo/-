import React, { useState } from "react";
import * as E from "./EmptyCard.styles";

function CreateCard({ fn }) {
  return (
    <E.CreateCardLayout onClick={fn}>
      <E.CraeteCard>
        <E.CraeteButton>+</E.CraeteButton>
      </E.CraeteCard>
    </E.CreateCardLayout>
  );
}

export default CreateCard;
