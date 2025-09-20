import "./Popular.css";
import data_product from "../../../public/data";
import Item from "../Item/Item";

export default function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
