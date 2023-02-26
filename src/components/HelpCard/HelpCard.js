import { CallToAction } from "../CallToAction/CallToAction";
import { Wrapper } from "./styles";

export function HelpCard({ helpData, ...props }) {
  return (
    <Wrapper
      {...props}
      style={{ backgroundImage: `url('${helpData.backgroundImage}')` }}
    >
      <div
        className="layer"
        style={{ backgroundColor: helpData.layerColor }}
      ></div>

      <div className="content">
        <div className="title">{helpData.title}</div>
        <CallToAction type="type2" />
      </div>
    </Wrapper>
  );
}
