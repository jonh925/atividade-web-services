"use client";
import { api } from "@/services/api";
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState } from "react";

export function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      name,
      description,
      image,
      price: parseFloat(price),
    };
    api.post("/items", data);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col bg-violet-500 w-96 p-8 rounded-md shadow-md">
  <h1 className="text-center text-gray-800 text-2xl font-semibold mb-4">Cadastro Rápido</h1>
  <input
    className="w-full p-3 mb-4 border rounded-md"
    type="text"
    placeholder="Nome do item"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <input
    className="w-full p-3 mb-4 border rounded-md"
    type="text"
    placeholder="Descrição do item"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
  <input
    className="w-full p-3 mb-4 border rounded-md"
    type="text"
    placeholder="URL da imagem"
    value={image}
    onChange={(e) => setImage(e.target.value)}
  />
  <input
    className="w-full p-3 mb-4 border rounded-md"
    type="text"
    placeholder="Preço do item"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />
  <button className="w-full p-3 bg-green-500 rounded-md text-white hover:bg-green-700 transition duration-300">Enviar</button>
 </form>

  );
}
