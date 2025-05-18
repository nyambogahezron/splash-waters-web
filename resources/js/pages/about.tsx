import AboutSection from '@/components/sections/AboutUs';
import HomeLayout from '@/layouts/app/home-layout';

export default function About() {
    return (
        <HomeLayout>
            <main className="bg-background min-h-screen pt-24">
                <AboutSection />
            </main>
        </HomeLayout>
    );
}
