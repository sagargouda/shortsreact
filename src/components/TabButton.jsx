export default function TabButton(props) {
  return (
    <li>
      <button onClick={props.click}>{props.children}</button>
    </li>
  );
}
