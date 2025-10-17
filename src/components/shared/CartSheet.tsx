import { useCartStore } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore(
    useShallow((state) => ({
      items: state.items,
      removeItem: state.removeItem,
      updateQuantity: state.updateQuantity,
      clearCart: state.clearCart,
    }))
  );
  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Votre Panier ({items.reduce((acc, item) => acc + item.quantity, 0)})</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <>
            <ScrollArea className="flex-grow pr-4 -mr-4 my-4">
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-start gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover rounded-md"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold text-sm">{item.product.name}</p>
                      <p className="text-muted-foreground text-sm">{item.product.price.toFixed(2)} €</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <SheetFooter className="mt-auto flex-col space-y-4 pt-4 border-t">
              <div className="flex justify-between font-semibold">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)} €</span>
              </div>
              <Button size="lg" className="w-full bg-saro-dark hover:bg-saro-dark/90">
                Passer la commande
              </Button>
              <Button variant="outline" onClick={clearCart}>
                Vider le panier
              </Button>
            </SheetFooter>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <p className="text-lg font-semibold">Votre panier est vide</p>
            <p className="text-muted-foreground mt-2">Explorez nos collections pour trouver votre bonheur.</p>
            <Button className="mt-6 bg-saro-gold text-saro-dark hover:bg-saro-gold/90" onClick={() => onOpenChange(false)}>
              Continuer mes achats
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}