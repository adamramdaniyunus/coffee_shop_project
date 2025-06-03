import background from '../assets/background.jpg'
import product from '../assets/product.png'
import LabelFlag from './ui/label.ui'
import Title from './ui/title.ui'
import Button from './ui/button.ui'
import CustomerReviewCarousel from './CustomerReview'
import { motion } from 'framer-motion'
import { containerVariants, fadeUp } from '../libs/animationFadeUp'

const ProductList = () => {
    return (
        <div
            className="mt-40 mb-20 relative w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 w-full md:px-40 px-10 py-20">
                <div className="flex flex-col gap-4 w-full">
                    <div>
                        <LabelFlag>favorite product</LabelFlag>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row w-full items-center">
                        <Title isUppercase>our favorite products</Title>
                        <Button isUppercase isLight fullscreen isMobile>view all product</Button>
                    </div>

                    {/* Product Cards */}
                    <motion.div
                        className="flex flex-wrap gap-10 justify-center items-center mt-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                variants={fadeUp}
                                className="bg-white/10 backdrop-blur-sm rounded-sm p-10 flex justify-between items-center md:max-w-[350px] group"
                            >
                                <div className="flex flex-col max-w-full items-center justify-center gap-2">
                                    <img
                                        src={product}
                                        alt=""
                                        className="group-hover:scale-105 transition-all duration-300 ease-in-out"
                                    />
                                    <p className="text-md text-white/80 uppercase">
                                        coffee: <span className="text-yellow-400 text-xl">★★★★★</span>
                                    </p>
                                    <h3 className="text-xl font-semibold text-white uppercase">
                                        Coffee Beans
                                    </h3>
                                    <p className="text-md font-semibold text-white uppercase">
                                        Price: $20.00
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Customer Review */}
                    <CustomerReviewCarousel />
                </div>
            </div>
        </div>
    )
}

export default ProductList
