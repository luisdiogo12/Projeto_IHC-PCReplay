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
	  })
	  .catch((error) => {
		console.error("Failed to load products:", error);
	  });
  }, [id]);

/* const product = {
  id: id,
  title: "ComputadorX",
  price: "R$ 2999,99",
  vendor: "VendedorX",
  images: [
    "https://fastly.picsum.photos/id/217/150/150.jpg?hmac=K_meJnVnOP2whrBnQX_aEyDyW_Vk9mdBZExY2Y8WCis",
    "https://fastly.picsum.photos/id/680/150/150.jpg?hmac=k7_h4ecbZ6RXaoRVCsnzAI83m6uT_E8b7sCFPzzZH9Q",
    "https://fastly.picsum.photos/id/804/150/150.jpg?hmac=UiUS5GDKK4vuOKwucPoDzHvZk3e0N6XBWkII7j0hraA",
  ],
  description: "Descrição do produto...",
  technicalInfo: "Informações técnicas...",
  evaluation: "Avaliações...",
}; */

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
            description={product.description}
            technicalInfo={product.technicalInfo}
            reviews={product.evaluation}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductPage;
