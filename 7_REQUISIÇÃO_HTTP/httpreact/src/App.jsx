import { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';
import './App.css'

const url = "http://localhost:3000/products/";

function App() {
  const { data: products, httpConfig, loading } = useFetch(url); // Ajuste na desestruturação
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price };
    httpConfig(product, "POST"); // Chamada correta para a função httpConfig
    setName("");
    setPrice("");
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        {loading && <p>Carregando dados...</p>}
        {!loading && 
          <ul>
            {products && products.map((product) =>(
              <li key={product.id}>{product.name} - R$: {product.price}</li>
            ))}
          </ul>
        }
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label >
              Nome:
              <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)} />
            </label>
            <label >
              Preço:
              <input type="number" value={price} name='namepriceme' onChange={(e) => setPrice(e.target.value)} />
            </label>
            <input type="submit" value="Criar" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App;
