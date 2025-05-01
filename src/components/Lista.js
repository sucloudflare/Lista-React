// ShoppingList.js
import React, { useState } from 'react'; // Importa o React e o hook useState

function ShoppingList() {
  // Estado da lista de itens (array de strings)
  const [items, setItems] = useState([]);

  // Estado do input (valor digitado)
  const [novoItem, setNovoItem] = useState('');

  // Função chamada ao adicionar item
  const adicionarItem = () => {
    if (novoItem.trim() !== '') {
      setItems([...items, novoItem]); // Adiciona novo item no array
      setNovoItem(''); // Limpa o input
    }
  };

  // Função para remover item por índice
  const removerItem = (index) => {
    const novaLista = items.filter((_, i) => i !== index);
    setItems(novaLista);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite um item"
        value={novoItem}
        onChange={(e) => setNovoItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removerItem(index)}>❌ Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
