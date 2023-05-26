import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    
    const {id} = useParams();

    const url = 'http://localhost:3000/products/' + id;
    const {data : product, loading, erro} = useFetch(url);

    console.log(product);

    return (
        <>
            <p>ID do produto: {id}</p>
            {erro && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$: {product.price}</p>
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </>
    )
}

export default Product