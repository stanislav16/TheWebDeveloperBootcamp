export default function Heading({ title = "Hello, World!", color = "blue" }) {
  return <h1 style={{ color: color }}>{title}</h1>;
}
