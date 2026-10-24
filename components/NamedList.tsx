type NamedListProps = {
  items: readonly string[];
};

export function NamedList({ items }: NamedListProps) {
  return (
    <ol className="named-list">
      {items.map((item, index) => (
        <li key={item}>
          <span className="num">{String(index + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}
