import { Wrapper } from "./styles";

export function SectionHeader({ children }) {
  return (
    <Wrapper>
      <div className="container">{children}</div>
    </Wrapper>
  );
}
