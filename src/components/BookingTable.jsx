import { BsCalendar, BsClock, BsPeopleFill } from 'react-icons/bs'
import Button from './ui/button.ui'
import LabelFlag from './ui/label.ui'

const apikey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const BookingTable = () => {
    return (
        <div>
            <div className='flex justify-center items-center flex-col md:flex-row'>
                {/* Map Section */}
                <div className="w-full md:w-1/3 h-96 md:h-[450px] relative">
                    <iframe
                        style={{ filter: 'grayscale(100%) invert(100%)' }}
                        title="Google Map"
                        width="100%"
                        height="100%"
                        className="border-0 grayscale"
                        loading="lazy"
                        allowFullScreen
                        src={`https://www.google.com/maps/embed/v1/place?key=${apikey}&q=Bogor+Indonesia`}
                    ></iframe>
                </div>

                {/* Booking Form */}
                <div className="w-full lg:w-1/3 bg-[#222121] flex items-center justify-center p-4 md:h-[450px]">
                    <div className="w-full max-w-xl">
                        <div className='mb-2'>
                            <LabelFlag>
                                Reservation
                            </LabelFlag>
                        </div>
                        <h2 className="text-2xl font-bold mb-6">Booking A Table</h2>

                        <form className="space-y-4">
                            <div className='flex items-center gap-2 p-3 rounded bg-black text-white border border-gray-600'>
                                <input
                                    type="text"
                                    placeholder="4 Person"
                                    className="w-full h-full focus:outline-none bg-transparent text-white placeholder-gray-400"
                                />
                                <BsPeopleFill className='w-10' />
                            </div>
                            <div className='flex items-center gap-2 p-3 rounded bg-black text-white border border-gray-600'>
                                <input
                                    type="date"
                                    placeholder="4 Person"
                                    className="w-full h-full focus:outline-none bg-transparent text-white placeholder-gray-400"
                                />
                                <BsCalendar className='w-10' />
                            </div>
                            <div className='flex items-center gap-2 p-3 rounded bg-black text-white border border-gray-600'>
                                <input
                                    type="time"
                                    placeholder="4 Person"
                                    className="w-full h-full focus:outline-none bg-transparent text-white placeholder-gray-400"
                                />
                                <BsClock className='w-10' />
                            </div>
                            <Button
                                fullscreen
                                isUppercase
                            >
                                BOOK A TABLE
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingTable