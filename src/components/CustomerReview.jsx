import { useEffect, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import LabelFlag from "./ui/label.ui"
import Title from "./ui/title.ui"

export default function CustomerReviewCarousel() {
  const sliderRef = useRef(null)
  const sliderInstanceRef = useRef(null)

  const [setSliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    created(slider) {
      sliderInstanceRef.current = slider
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderInstanceRef.current) {
        sliderInstanceRef.current.next()
      }
    }, 3000) // 3 detik

    return () => clearInterval(interval)
  }, [])

  const reviews = [
    {
      name: "John Doe",
      comment: "Pelayanan sangat baik dan cepat!",
    },
    {
      name: "Jane Smith",
      comment: "Saya sangat puas dengan produk ini.",
    },
    {
      name: "Alice",
      comment: "Support customer-nya responsif sekali.",
    },
  ]

  return (
    <div className="mt-40 flex flex-col items-center justify-center gap-4">
      <LabelFlag>customer review</LabelFlag>
      <Title isUppercase>what our customers say</Title>
      <div
        ref={(ref) => {
          sliderRef.current = ref
          setSliderRef(ref)
        }}
        className="keen-slider max-w-xl mt-6"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-white/10 backdrop-blur-sm text-white p-6 rounded-sm text-center"
          >
            <p className="italic">"{review.comment}"</p>
            <p className="mt-4 font-semibold">{review.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
