type Props = {
  children: JSX.Element;
};

export function Keyboard({ children }: Props) {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">{children}</ol>
    </div>
  );
}
