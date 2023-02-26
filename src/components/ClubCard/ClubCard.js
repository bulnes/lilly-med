import Image from "next/image";
import { CallToAction } from "../CallToAction/CallToAction";
import { Wrapper } from "./styles";

export function ClubCard({
  cardIcon,
  cardCover,
  cardTitle,
  cardDescription,
  ...props
}) {
  return (
    <Wrapper {...props}>
      <div className="title">
        <Image src={cardIcon} width={50} height={50} alt="" loading="lazy" />

        <span>{cardTitle}</span>
      </div>

      <div className="cover">
        <Image src={cardCover} width={311} height={134} alt="" loading="lazy" />
      </div>

      <div className="description">
        <p>{cardDescription}</p>
        <CallToAction type="type2" />
      </div>
    </Wrapper>
  );
}
