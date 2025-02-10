// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/produtos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Lista de Produtos</h2>
      <ul>
        {produtos.map((produto: any) => (
          <li key={produto.id}>
            {produto.nome} - R${produto.preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
