import { Wrapper } from "./styles";

export function Slider({ children }) {
  return (
    <Wrapper>
      <div className="content">
        {children.map((child, key) => (
          <div key={key}>{child}</div>
        ))}
      </div>

      {children.length > 0 && (
        <div className="dots">
          {children.map((child, key) => (
            <div key={key} className="dot"></div>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
