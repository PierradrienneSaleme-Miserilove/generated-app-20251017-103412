import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { products, Product } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { Toaster, toast } from 'sonner';
import { ProductDetailSkeleton } from '@/components/shared/ProductDetailSkeleton';
export function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const addItemToCart = useCartStore((state) => state.addItem);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const foundProduct = products.find((p) => p.id === Number(productId));
      setProduct(foundProduct);
      setIsLoading(false);
    }, 1000); // Simulate network delay
    return () => clearTimeout(timer);
  }, [productId]);
  if (isLoading) {
    return (
      <MainLayout>
        <ProductDetailSkeleton />
      </MainLayout>
    );
  }
  if (!product) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl font-display font-bold text-saro-dark">Produit non trouvé</h1>
          <p className="mt-4 text-lg text-saro-dark/70">
            Désolé, nous n'avons pas pu trouver le produit que vous cherchez.
          </p>
          <Button asChild className="mt-8 bg-saro-dark hover:bg-saro-dark/90">
            <Link to="/boutique">Retour à la boutique</Link>
          </Button>
        </div>
      </MainLayout>
    );
  }
  const handleAddToCart = () => {
    addItemToCart(product);
    toast.success(`${product.name} a été ajouté au panier!`);
  };
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length);
  };
  return (
    <MainLayout>
      <Toaster richColors position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.images[currentImageIndex]}
                alt={`${product.name} - image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80"
                    onClick={prevImage}
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80"
                    onClick={nextImage}
                  >
                    <ChevronRight />
                  </Button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`aspect-square w-full rounded-md overflow-hidden ring-2 ring-offset-2 transition-all ${
                      currentImageIndex === index ? 'ring-saro-gold' : 'ring-transparent'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-saro-dark">{product.name}</h1>
            <p className="text-3xl text-saro-gold font-bold mt-4">{product.price.toFixed(2)} €</p>
            <div className="mt-6 prose prose-lg text-saro-dark/80">
              <p>{product.description}</p>
            </div>
            <div className="mt-auto pt-8">
              <Button size="lg" className="w-full bg-saro-dark text-white hover:bg-saro-dark/90" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Ajouter au panier
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}