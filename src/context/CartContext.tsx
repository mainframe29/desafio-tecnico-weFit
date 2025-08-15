// src/context/CartContext.tsx
import { createContext, useContext, useState, useMemo, type ReactNode } from "react";
import type { Produto } from "../models/Produto";
import type { CartItem } from "../models/CartItem";


interface CartContextData {
  cartItems: CartItem[];
  addToCart: (produto: Produto) => void;
  removeFromCart: (produtoId: number) => void;
  removeFromCartPartial:(produtoId: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextData | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (produto: Produto) => {
    setCartItems((prev) => {
      const itemExistente = prev.find((item) => item.produto.id === produto.id);
      if (itemExistente) {
        return prev.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prev, { produto, quantidade: 1 }];
      }
    });
  };

  const removeFromCart = (produtoId: number) => {
    setCartItems((prev) => prev.filter((item) => item.produto.id !== produtoId));
  };

  const removeFromCartPartial = (produtoId: number) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.produto.id === produtoId
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    ).filter(item => item.quantidade > 0) // remove se chegar a 0
  );
};

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.produto.price * item.quantidade, 0);
  }, [cartItems]);

  const clearCart = () => {
  setCartItems([]);
};

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeFromCartPartial, total, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};
