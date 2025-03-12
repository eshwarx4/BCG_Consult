import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
    {
        id: 1,
        content: "With KrishiRakshak, I now have the power of knowledge in my hands! From expert advice to real-time crop insights, this platform has helped me increase my yield and secure better prices. Farming is now smarter and more rewarding!",
        author: "James Wilson",
        position: "Owner, Wilson Family Farms",
        rating: 5,
        image: "Firefly A hardworking Indian farmer standing in a lush green paddy field, a simple cotton shirt, smi (1).jpg"
    },
    {
        id: 2,
        content: "KrishiRakshak has transformed the way I farm! With real-time weather updates, expert guidance, and better market insights, I can make smarter decisions for my crops. More yield, better profits – all at my fingertips!",
        author: "Sarah Chen",
        position: "Founder, Green Valley Organics",
        rating: 5,
        image: "testimonails.jpg"
    }
];

const Testimonials = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        What Our Farmers Say
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Success stories from farmers who transformed their operations with KrishiRakshak
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-2"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="relative bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                        >
                            {/* Decorative quote icon */}
                            <div className="absolute -top-4 -right-4 text-green-100">
                                <Quote size={80} />
                            </div>

                            <div className="relative z-10">
                                {/* Star rating */}
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                    ))}
                                </div>

                                {/* Testimonial content */}
                                <p className="text-gray-700 text-lg italic mb-6 relative z-10">
                                    "{testimonial.content}"
                                </p>

                                {/* Author info */}
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="h-14 w-14 rounded-full object-cover border-2 border-green-100"
                                    />
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                                        <p className="text-green-600">{testimonial.position}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Green accent */}
                            <div className="absolute top-0 left-0 h-full w-1 bg-green-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors"
                    >
                        Join Thousands of Satisfied Farmers
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;