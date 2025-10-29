import React, { useState } from "react";
import "./App.css";

// 1. Componente Mensagem
function Mensagem({ nome }) {
  return <h2>Bem-vindo ao meu site, {nome}!</h2>;
}

// 2. Contador simples
function Contador() {
  const [contador, setContador] = useState(0);

  const btnStyle = {
    padding: "8px 14px",
    margin: 6,
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "600",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3>Contador: {contador}</h3>
      <div>
        <button
          type="button"
          onClick={() => setContador((c) => c + 1)}
          style={{ ...btnStyle, backgroundColor: "green", color: "white" }}
        >
          Aumentar
        </button>

        <button
          type="button"
          onClick={() => setContador((c) => c - 1)}
          style={{ ...btnStyle, backgroundColor: "red", color: "white" }}
        >
          Diminuir
        </button>

        <button
          type="button"
          onClick={() => setContador(0)}
          style={{ ...btnStyle, backgroundColor: "black", color: "white" }}
        >
          Zerar
        </button>
      </div>
    </div>
  );
}

// 3. Cálculo de salário
function calcularNovoSalario(salario, aumento) {
  return salario + aumento;
}

// 4. Cálculo da média
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

// 5. Área do Retângulo
function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

// 6. Soma
function somar(a, b) {
  return a + b;
}

// 7. Subtração
function subtrair(a, b) {
  return a - b;
}

// 8. Multiplicação
function multiplicar(a, b) {
  return a * b;
}

export default function App() {
  // valores de exemplo
  const nome = "Lavínia";
  const salarioAtual = 2500;
  const aumento = 500;

  const novoSalario = calcularNovoSalario(salarioAtual, aumento);
  const media = calcularMedia(8, 9);
  const area = calcularAreaRetangulo(5, 3);
  const soma = somar(10, 5);
  const subtracao = subtrair(10, 5);
  const multiplicacao = multiplicar(10, 5);

  return (
    <div className="app-center">
      <Mensagem nome={nome} />

      <div style={{ marginTop: 18 }}>
        <Contador />
      </div>

      <div style={{ marginTop: 28, textAlign: "center" }}>
        <h3>Cálculo de Salário</h3>
        <p>
          Salário atual: R${salarioAtual} <br /> Aumento: R${aumento} <br />
          <b>Novo salário: R${novoSalario}</b>
        </p>

        <h3>Cálculo da Média</h3>
        <p>Média das notas (8 e 9): {media}</p>

        <h3>Área do Retângulo</h3>
        <p>Base: 5 | Altura: 3 → Área = {area}</p>

        <h3>Operações Matemáticas</h3>
        <p>Soma (10 + 5) = {soma}</p>
        <p>Subtração (10 - 5) = {subtracao}</p>
        <p>Multiplicação (10 × 5) = {multiplicacao}</p>
      </div>
    </div>
  );
}
