import Image from "next/image";
import { CallToAction } from "../CallToAction/CallToAction";
import { Wrapper } from "./styles";

export function ProcedureCard({ procedure }) {
  const { title, subtitle, description, cardCover } = procedure;
  return (
    <Wrapper>
      <div className="cover">
        <Image
          src={cardCover}
          alt=""
          width={312.52}
          height={121.5}
          loading={"lazy"}
        />
      </div>

      <div className="content">
        <h3 className="title">{title}</h3>

        <div className="subtitle">{subtitle}</div>

        <p className="description">{description}</p>

        <CallToAction type="type2" />
      </div>
    </Wrapper>
  );
}
