import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import HomeLayout from '@/layouts/app/home-layout';

export default function Home() {
    return (
        <HomeLayout>
            <Hero />
            <Products />
            <Contact />
        </HomeLayout>
    );
}
