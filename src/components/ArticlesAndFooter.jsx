import background from '../assets/background.jpg'
import product from '../assets/product.png'
import five from '../assets/five.jpg'
import six from '../assets/six.jpg'
import seven from '../assets/seven.jpg'
import LabelFlag from './ui/label.ui'
import Title from './ui/title.ui'
import Button from './ui/button.ui'
import CustomerReviewCarousel from './CustomerReview'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { containerVariants, fadeIn } from '../libs/animationFadeUp'
import {Link as ScrollLink} from 'react-scroll'

const ArticlesAndFooter = () => {

    const images = {
        1: five,
        2: six,
        3: seven,
    }

    return (
        <div
            className="mt-40 relative w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
            id='articles-footer'
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 w-full md:px-40 px-10 py-20">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col justify-center w-full items-center">
                        <LabelFlag>our blogs</LabelFlag>
                        <Title isUppercase>our blogs & articles</Title>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-wrap gap-10 justify-center items-center mt-10">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                variants={fadeIn}
                                className="flex flex-col gap-2 h-full w-full group: max-w-[350px] bg-black/50 rounded-sm hover:bg-black/70 hover:scale-105 transition-all duration-300 ease-in-out">
                                <img src={images[item]} alt="" className='max-h-[200px] w-full object-cover rounded-sm' />
                                <div className='p-2 flex flex-col gap-2'>
                                    <p className="text-xs text-white/80 uppercase">
                                        by: adam | life | 20.10.2025
                                    </p>
                                    <h3 className="text-xs font-bold text-white uppercase">
                                        question about life and death
                                    </h3>
                                    <p className="text-xs text-white/60 cursor-pointer hover:text-white uppercase">
                                        read more
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer Section*/}

                    {/* Phone address section */}
                    <div className="flex flex-col justify-between items-center mt-40 w-full">
                        <div className="flex md:items-center flex-col md:flex-row justify-between gap-2 w-full border-b border-white/20 pb-10">
                            <div className='flex gap-4 flex-wrap'>
                                <p className="text-sm text-white/50 uppercase flex items-center gap-2"><BsTelephoneFill className='text-primary' /> Phone: +123 456 7890</p>
                                <p className="text-sm text-white/50 uppercase flex items-center gap-2"><IoLocationSharp className='text-primary' /> address: 123 Main St, Anytown, USA</p>
                            </div>

                            <p className="text-sm text-white/50 uppercase flex items-center gap-2"><MdEmail className='text-primary' /> email: <span className='lowercase'>contact@ourblog.com</span></p>
                        </div>

                        {/* Media Social */}
                        <div className='flex md:items-center md:flex-row flex-col justify-between gap-4 mt-10 w-full border-b border-white/20 pb-4'>
                            <div className='flex flex-col items-start gap-4 max-w-lg'>
                                <Link
                                    to="/"
                                    className="text-primary text-2xl font-bold tracking-wide font-main"
                                >
                                    CoffeeShop
                                </Link>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus debitis aspernatur delectus impedit placeat ullam reprehenderit. Delectus eaque iusto voluptatem.</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <Link to="/" className="text-2xl text-white/50 hover:text-white transition-colors duration-300">
                                    <FaFacebook />
                                </Link>
                                <Link to="/" className="text-2xl text-white/50 hover:text-white transition-colors duration-300">
                                    <FaTwitter />
                                </Link>
                                <Link to="/" className="text-2xl text-white/50 hover:text-white transition-colors duration-300">
                                    <FaInstagram />
                                </Link>
                                <Link to="/" className="text-2xl text-white/50 hover:text-white transition-colors duration-300">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>

                        {/* Menu Section */}
                        <div className='flex md:items-center flex-col md:flex-row justify-between gap-4 mt-10 w-full'>
                            <div className='flex flex-col items-start gap-4 max-w-lg'>
                                <ul className='text-sm text-white/50 flex md:flex-row flex-col gap-10 uppercase'>
                                    <li className='hover:text-white transition-colors duration-300 cursor-pointer'>
                                        <ScrollLink to="hero" smooth duration={500}>Home</ScrollLink>
                                    </li>
                                    <li className='hover:text-white transition-colors duration-300 cursor-pointer'>
                                        <ScrollLink to="about" smooth duration={500}>About Us</ScrollLink>
                                    </li>
                                    <li className='hover:text-white transition-colors duration-300 cursor-pointer'>
                                        <ScrollLink to="product-list" smooth duration={500}>Products</ScrollLink>
                                    </li>
                                    <li className='hover:text-white transition-colors duration-300 cursor-pointer'>
                                        <ScrollLink to="articles-footer" smooth duration={500}>Contact</ScrollLink>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex justify-end items-center gap-4'>
                                <ScrollLink to='hero' smooth duration={500} className='flex uppercase items-center gap-1 text-md text-white/50 hover:text-white transition-colors duration-300 cursor-pointer'>
                                    go top
                                    <span className='text-xs'>
                                        <ArrowUp />
                                    </span>
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticlesAndFooter
