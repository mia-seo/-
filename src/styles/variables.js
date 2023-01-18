import { css } from "styled-components";

const variables = {
  wh: (w, h) => `
    width: ${w};
    height: ${h};
  `,

  flex: (direction, justify, align) => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  absolute: (top, right, bottom, left) => `
  position: absolute;
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
  `,
};

export default variables;
