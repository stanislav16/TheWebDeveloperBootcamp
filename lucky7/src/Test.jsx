export default function Test({ num = 9 }) {
  return Array(num)
    .fill()
    .map((_, i) => <div key={i}>Test {i}</div>);
}
