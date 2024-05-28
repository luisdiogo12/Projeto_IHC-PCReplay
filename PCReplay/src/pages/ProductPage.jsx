import React, { useEffect , useState} from "react";
import { useUser } from "../mocks/UserContext";
import MainLayout from "./LayoutPage";
import { useParams } from "react-router-dom"; // Importe o hook useParams
import { fetchProductsByDescription } from "../mocks/api"; // Importe a função fetchProductsByDescription
import ProductImages from "../components/ProductPage/ProductImages";
import ProductInfoTabs from "../components/ProductPage/ProductInfoTabs";
import GeneralInfo from "../components/ProductPage/GeneralInfo";

const ProductPage = () => {
  const { user } = useUser(); // util para as op. de adicionar/remover do carrinho e favoritos
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
	fetchProductsByDescription({ id: [+id] })
	  .then((data) => {
		setProducts(data[0]);
		console.log("data:", data);
    console.log("id", id);
    console.log("product.imageURL", product.imageUrl);
	  })
	  .catch((error) => {
		console.error("Failed to load products:", error);
	  });
  }, [id]);

  return (
    console.log("product:", product),
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1 lg:col-span-2">
          <ProductImages images={product.imageUrl} />
        </div>
        <div className="col-span-1">
          <GeneralInfo product={product} />
        </div>
        <div className="col-span-1 lg:col-span-3">
          <ProductInfoTabs
            product={product}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
