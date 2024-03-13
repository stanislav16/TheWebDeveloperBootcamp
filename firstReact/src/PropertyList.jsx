import "./PropertyList.css";
import PropertyListItem from "./PropertyListItem";
export default function PropertyList({ properties }) {
  return (
    <div className="PropertyList">
      {properties.map((property) => (
        <PropertyListItem key={property.id} property={property} />
      ))}
    </div>
  );
}
