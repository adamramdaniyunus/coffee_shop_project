import coffeeImg from '../assets/coffee.png'

const menuItems = [
  {
    name: "Americano Roasted Coffee",
    price: "$12.00",
    image: coffeeImg,
  },
  {
    name: "Americano Roasted Coffee",
    price: "$12.00",
    image: coffeeImg,
  },
  {
    name: "Americano Roasted Coffee",
    price: "$12.00",
    image: coffeeImg,
  },
  {
    name: "Americano Roasted Coffee",
    price: "$12.00",
    image: coffeeImg,
  },
  {
    name: "Americano Roasted Coffee",
    price: "$12.00",
    image: coffeeImg,
  },
  {
    name: "Americano Roasted Coffee",
    price: "$12.00",
    image: coffeeImg,
  },
];

export default function FavoriteMenu() {
  return (
    <div className="mt-4">
      <div className="max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center justify-between w-full md:w-[400px] border border-white/20 rounded-md px-4 py-5 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:scale-105 transition"
          >
            <div className="flex items-center gap-4 relative">
              <div className='absolute -left-9 rounded-full bg-secondary'>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <h2 className="text-white text-sm font-medium px-4">{item.name}</h2>
            </div>
            <span className="text-primary text-sm font-semibold">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
