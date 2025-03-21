import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const heroSlides = [
    {
        title: 'Professionally treated water, all over the house',
        description: 'Vivamus non posuere nisl, id auctor ligula. vitae lobortis nisi',
        image: 'https://images.unsplash.com/photo-1553564552-02656d6a2390?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D',
    },
    {
        title: 'Advanced Water Purification Technology',
        description: 'State-of-the-art filtration systems for the purest water quality',
        image: 'https://plus.unsplash.com/premium_photo-1705969351341-f34f843d7a32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww',
    },
    {
        title: 'Smart Water Management Solutions',
        description: 'Intelligent monitoring and control for optimal water quality',
        image: 'https://images.unsplash.com/photo-1563351672-62b74891a28a?w=800&q=80',
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    return (
        <section className="bg-background relative flex h-[calc(100dvh-(5rem))] w-screen items-center justify-center overflow-hidden">
            <div className="bg-blue/10 absolute -right-6 h-full w-full rounded-full blur-3xl"></div>
            <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-14">
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div key={currentSlide} className="relative flex h-[calc(100dvh-(5rem))] w-screen items-center">
                            {/* hero text  */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute bottom-[35%] left-0 z-10 max-w-[800px] py-2 pl-8 md:bottom-1/2 md:left-96 md:space-y-6"
                            >
                                <h1 className="text-text mb-6 text-3xl font-bold md:text-6xl">{heroSlides[currentSlide].title}</h1>
                                <p className="mb-14 text-lg text-white">{heroSlides[currentSlide].description}</p>
                                <button className="bg-blue rounded-lg px-10 py-4 text-white transition-all hover:bg-blue-600 hover:shadow-lg">
                                    Find Solution
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative h-full w-full overflow-hidden"
                            >
                                <img
                                    src={heroSlides[currentSlide].image}
                                    alt="Water Purifier"
                                    width={800}
                                    height={550}
                                    className="h-full w-full object-cover object-center opacity-90 dark:opacity-30"
                                />
                                <div className="dark:bg-blue/10 absolute inset-0 h-full w-full rounded-full bg-transparent blur-3xl"></div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/*  slider controls */}
                    {/* prev */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-[95%] left-[73%] -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 md:top-1/2 md:left-14 md:-mt-14"
                    >
                        <svg className="text-blue h-5 w-5 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* next */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-[95%] right-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 md:top-1/2 md:right-14 md:-mt-14"
                    >
                        <svg className="text-blue h-5 w-5 md:h-8 md:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* slide indicators */}

                    <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 transform space-x-2">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                    currentSlide === index ? 'bg-blue w-4' : 'bg-gray-300'
                                }`}
                                onClick={() => setCurrentSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
