import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

export default function List() {
  return (
    <div className="border rounded-xl bg-white">
      <ListHeader>CLIENT NAME</ListHeader>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}
