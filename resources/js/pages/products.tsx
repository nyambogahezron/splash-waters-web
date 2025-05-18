import ProductCard from '@/components/ProductCard';
import HomeLayout from '@/layouts/app/home-layout';

const products = [
    {
        id: 1,
        name: 'Premium Water Purifier',
        image: 'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
        price: 599,
        description: 'Advanced 7-stage filtration system',
    },
    {
        id: 2,
        name: 'UV Water Sterilizer',
        image: 'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
        price: 299,
        description: '99.99% bacteria elimination',
    },
    {
        id: 3,
        name: 'Smart Water Softener',
        image: 'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
        price: 499,
        description: 'IoT-enabled water softening',
    },
];

export default function Products() {
    return (
        <HomeLayout>
            <section className="relative overflow-hidden bg-transparent py-20">
                {/* background blur */}
                <div className="bg-blue/5 absolute -right-6 -bottom-6 z-0 h-full w-full rounded-full opacity-55 blur-3xl"></div>

                <div className="relative z-10 mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
