import coffeeImgFour from "../assets/four.jpg";
import LabelFlag from './ui/label.ui';
import SubTitle from './ui/subtitle.ui';
import Paragraph from './ui/paragrap.ui';
import Button from './ui/button.ui';
import { motion } from "framer-motion";
import { bounceIn } from "../libs/animationFadeUp";

const About = () => {
    return (
        <motion.div
            variants={bounceIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="flex w-full md:flex-row flex-col md:mt-[430px] mt-10 justify-center">
            <div className="md:w-1/3 w-full h-[550px]">
                <img src={coffeeImgFour} alt="capuccino" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/3 w-full h-[550px] flex flex-col p-10 gap-4 justify-center bg-[#222121]">
                <div>
                    <LabelFlag>
                        about
                    </LabelFlag>
                </div>
                <div className="flex flex-col gap-4">
                    <SubTitle>About Us</SubTitle>
                    <Paragraph isLarge>
                        At Brew & Co, we believe that a great day starts with a great cup of coffee.
                        From carefully selected beans to artisan roasting and brewing, our passion lies
                        in delivering a rich and memorable coffee experience. Whether you’re here to sip, relax, or recharge,
                        every cup is made with heart, craftsmanship, and a love for coffee culture.
                    </Paragraph>
                </div>

                <div>
                    <Button isLight isUppercase>
                        Read more
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export default About