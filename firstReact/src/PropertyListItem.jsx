export default function PropertyListItem({ property }) {
  return (
    <div>
      <h2>{property.name}</h2>
      <h3>{property.price}</h3>
      <h4>{property.rating}</h4>
    </div>
  );
}
