import { ShoppingCart, Trash2, Minus, Plus, MessageCircle, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";

const CartDrawer = () => {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal, totalItems, isOpen, setIsOpen } = useCart();

  const whatsappCheckout = () => {
    const lines = items.map(
      (i) => `• ${i.product.name} (x${i.quantity}) — R$${(i.product.price * i.quantity).toFixed(2).replace(".", ",")}`
    );
    const total = `\n\n💰 Total: R$${subtotal.toFixed(2).replace(".", ",")}`;
    const text = `Olá! Gostaria de finalizar meu pedido:\n\n${lines.join("\n")}${total}`;
    window.open(`https://wa.me/5511940562933?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md bg-[#1e1e1e] border-border/50 flex flex-col">
        <SheetHeader className="pb-4 border-b border-border/30">
          <SheetTitle className="flex items-center gap-2 text-foreground">
            <ShoppingCart size={20} className="text-primary" />
            Carrinho ({totalItems})
          </SheetTitle>
          <SheetDescription className="text-muted-foreground text-xs">
            Seus produtos selecionados
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
            <ShoppingCart size={48} className="text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">Seu carrinho está vazio</p>
            <Button variant="outline" size="sm" className="mt-4" onClick={() => setIsOpen(false)}>
              Continuar comprando
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6 py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 p-3 rounded-lg bg-card/40 border border-border/20"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug line-clamp-2">{item.product.name}</p>
                      <p className="text-primary font-bold text-sm mt-1">
                        R${item.product.price.toFixed(2).replace(".", ",")}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded hover:bg-accent/20 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-semibold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded hover:bg-accent/20 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="ml-auto p-1 text-muted-foreground hover:text-red-400 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t border-border/30 pt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Subtotal</span>
                <span className="text-xl font-bold text-primary">
                  R${subtotal.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <Button className="w-full" size="lg" onClick={whatsappCheckout}>
                <MessageCircle size={18} />
                Finalizar pelo WhatsApp
              </Button>
              <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={clearCart}>
                Limpar carrinho
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
