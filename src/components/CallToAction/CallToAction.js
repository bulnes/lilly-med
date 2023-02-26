import Image from "next/image";
import { callToActionData } from "./callToActionData";
import {
  CallToActionType1,
  CallToActionType2,
  CallToActionType3,
  CallToActionType4,
} from "./styles";

const CallToActionStyles = {
  type1: CallToActionType1,
  type2: CallToActionType2,
  type3: CallToActionType3,
  type4: CallToActionType4,
};

export function CallToAction({ type, children, ...props }) {
  const Style = CallToActionStyles[type];
  const data = callToActionData[type];

  return (
    <Style
      href={data.href}
      title={data.title}
      target="_blank"
      rel="noopener noreferrer"
      data-type={type}
      {...props}
    >
      {data.showIcon ? (
        <Image src={data.icon} alt="" width={16} height={16} loading={"lazy"} />
      ) : null}

      {children || <span>{data.text}</span>}
    </Style>
  );
}

CallToAction.defaultProps = {
  type: "type1",
};
