import PizzaData from "../data/PizzaData";

function MenuPage() {
  const availablePizzas = PizzaData.filter((pizza) => !pizza.soldOut);
  console.log(availablePizzas);
  return (
    <>
      {/* Menu Description */}
      <section className="max-w-2xl text-center mt-8" >
        <h2 className="text-2xl font-semibold mb-2">Our Menu</h2>
        <p className="text-lg text-gray-700">
          Authentic Italian cuisine. {availablePizzas.length} creative dishes to choose from. All from our stone oven, all organic, all delicious.
        </p>
      </section >

      {/* Pizza List */}
      {availablePizzas.length === 0 && (
        <p className="my-6 text-center mx-auto font-bold text-gray-900">We're still working on our menu. Please come back later :)</p>
      )}

      < section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl" >
        {
          availablePizzas.map((pizza) => (
            <div
              key={pizza.name}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-green-300 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={pizza.photoName}
                alt={pizza.name}
                className="w-full h-48 object-cover transition duration-300 hover:brightness-95"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{pizza.name}</h3>
                <p className="text-gray-600">{pizza.ingredients}</p>
                <p className="mt-2 text-lg font-semibold text-green-700">${pizza.price}</p>
              </div>
            </div>
          ))
        }
      </section>
    </>
  );
}
export default MenuPage;


