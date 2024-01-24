"use client"

import { api } from '../../services/api';
import React from 'react';
import { useEffect, useState } from 'react';

interface Item {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export default function Itens() {
  const [items, setItems] = useState<Item[]>([]);

  const getItems = async () => {
    try {
      const response = await api.get('/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  async function handleDelete(itemId: string) {
    try {
      await api.delete(`/items/${itemId}`);
      setItems(items.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  return (
    <ul className='p-4 text-lg pt-24 flex flex-col gap-4 bg-slate-300 h-screen'>
  {items.map((item: Item) => (
    <li key={item.id} className='bg-white rounded-lg p-6 flex gap-4 items-center shadow-md'>
      <div>
        <img src={item.image} alt={item.name} className='w-32 h-32 object-cover rounded-md' />
      </div>
      <div>
        <span className='font-bold'>ID:</span> {item.id}
        <br />
        <span className='font-bold'>Name:</span> {item.name}
        <br />
        <span className='font-bold'>Description:</span> {item.description}
        <br />
        <span className='font-bold'>Price:</span> ${item.price ? item.price.toFixed(2) : 'N/A'}
        <br />
        <button
          className='bg-zinc-500 px-4 py-2 rounded hover:bg-zinc-700'
          onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
  );
}
