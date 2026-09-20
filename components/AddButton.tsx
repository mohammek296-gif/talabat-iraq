"use client";

import { useCart } from "./CartProvider";

type AddButtonProps = {
  id: string;
  name: string;
  price: number;
};

export default function AddButton({
  id,
  name,
  price,
}: AddButtonProps) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id,
      name,
      price,
    });
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className="add-button"
    >
      أضف للسلة
    </button>
  );
}
