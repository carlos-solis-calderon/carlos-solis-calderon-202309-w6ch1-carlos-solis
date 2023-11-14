type Props = {
  children: JSX.Element;
};

export function Actions({ children }: Props) {
  return <div className="actions">{children}</div>;
}
