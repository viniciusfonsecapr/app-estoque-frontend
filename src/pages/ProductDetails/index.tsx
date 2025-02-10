// src/pages/ProductDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [produto, setProduto] = useState<any>(null);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/produtos/${id}`
        );
        setProduto(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchProduto();
  }, [id]);

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>Preço: R${produto.preco.toFixed(2)}</p>
      <p>Quantidade em estoque: {produto.quantidade}</p>
    </div>
  );
};

export default ProductDetails;
