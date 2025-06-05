import coffeeImg from "../assets/hero.jpg";
import coffeeImgOne from "../assets/one.jpg";
import coffeeImgTwo from "../assets/two.jpg";
import coffeeImgThree from "../assets/three.jpg";
import Button from "./ui/button.ui";
import SubTitle from "./ui/subtitle.ui";
import Title from "./ui/title.ui";
import Paragraph from "./ui/paragrap.ui";
import { motion } from "framer-motion";
import { containerVariants, fadeDown, fadeLeft } from "../libs/animationFadeUp";


export default function Hero() {
    return (
        <>
            <section className="relative w-full h-[720px]" id="hero">
                {/* Background Image and Gradient */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={coffeeImg}
                        alt="Coffee Splash"
                        className="w-full h-full object-cover"
                        style={{
                            maskImage: "linear-gradient(to right, black 60%, transparent)",
                            WebkitMaskImage: "linear-gradient(to right, black 60%, transparent)",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#00000044] to-transparent" />
                </div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="text-white mt-24">
                        <span className="text-primary font-semibold text-sm tracking-wide">
                            ☕ New Seasonal Blend!
                        </span>
                        <Title>
                            Start Your <br /> Day with a <br /> Splash of Coffee
                        </Title>
                        <Paragraph hasMarginBottom isLarge>
                            Discover the rich taste of hand-crafted <br /> coffee beverages made just for you.
                        </Paragraph>
                        <div className="flex gap-4">
                            <Button isUppercase={true} isLight={false}>
                                Shop Now
                            </Button>
                            <Button isLight isUppercase>
                                Read more
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                    className="absolute bottom-[-320px] w-full z-20 md:flex hidden justify-center gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {[coffeeImgOne, coffeeImgTwo, coffeeImgThree].map((img, index) => (
                        <motion.div
                            key={index}
                            variants={fadeDown}
                            className="group h-[350px] w-[350px] rounded-lg relative overflow-hidden shadow-xl bg-black/40 backdrop-blur-sm"
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/10 z-20" />

                            {/* Image */}
                            <img
                                className="w-full h-full object-cover rounded-lg z-10 group-hover:scale-125 transition duration-300"
                                src={img}
                                alt={`cappuccino ${index + 1}`}
                            />

                            {/* Text Content */}
                            <div className="flex flex-col absolute bottom-5 p-4 z-30 text-white transition duration-300 group-hover:translate-y-[-5px]">
                                <h1 className="text-2xl font-semibold">0{index + 1}</h1>

                                {index === 0 && (
                                    <>
                                        <h1 className="text-lg font-semibold">Handcrafted Latte Art</h1>
                                        <Paragraph>
                                            Each cup is crafted with passion and precision, creating beautiful patterns on top of rich, flavorful coffee.
                                        </Paragraph>
                                    </>
                                )}
                                {index === 1 && (
                                    <>
                                        <h1 className="text-lg font-semibold">Warm & Cozy Moments</h1>
                                        <Paragraph>
                                            Embrace the comfort of a warm cup of coffee, perfect for relaxing and unwinding in a cozy ambiance.
                                        </Paragraph>
                                    </>
                                )}
                                {index === 2 && (
                                    <>
                                        <h1 className="text-lg font-semibold">Perfectly Ground Beans</h1>
                                        <Paragraph>
                                            Freshly ground premium beans deliver the rich aroma and taste that define the perfect brew.
                                        </Paragraph>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </section>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-5 full z-20 md:hidden flex px-4 flex-wrap justify-center gap-6">
                {[coffeeImgOne, coffeeImgTwo, coffeeImgThree].map((img, index) => (
                    <motion.div key={index} variants={fadeLeft} className="group h-[500px] w-full rounded-lg relative overflow-hidden shadow-xl bg-black/40 backdrop-blur-sm">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/10 z-20" />

                        {/* Image */}
                        <img
                            className="w-full h-full object-cover rounded-lg z-10 group-hover:scale-125 transition duration-300"
                            src={img}
                            alt={`cappuccino ${index + 1}`}
                        />

                        {/* Text Content */}
                        <div className="flex flex-col absolute bottom-5 p-4 z-30 text-white transition duration-300 group-hover:translate-y-[-5px]">
                            <SubTitle>
                                0{index + 1}
                            </SubTitle>
                            <SubTitle>
                                Lorem ipsum dolor sit amet.
                            </SubTitle>
                            <p className="text-third text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, impedit!
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}
