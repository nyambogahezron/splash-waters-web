import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/GlobalContext';
import { Product } from '@/types';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useGlobalContext();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
        >
            <div className="relative h-48">
                <img src={product.image} alt={product.name} loading="lazy" className="object-cover" />
                {product.category && (
                    <div className="absolute top-4 right-4 rounded-full bg-[#0099FF] px-3 py-1 text-sm text-white">{product.category}</div>
                )}
            </div>
            <div className="p-6">
                <h4 className="text-foreground mb-2 text-xl font-semibold">{product.name}</h4>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#0099FF]">${product.price}</span>
                    <Button onClick={() => addToCart(product)} className="flex items-center space-x-2 bg-[#0099FF] text-white hover:bg-blue-600">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
