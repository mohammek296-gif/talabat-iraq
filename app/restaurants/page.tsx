import AddButton from "@/components/AddButton";

const restaurants = [
  {
    id: "karbala-burger",
    name: "مطعم كربلاء برغر",
    category: "برغر • وجبات سريعة",
    rating: "4.8",
    deliveryTime: "25 دقيقة",
    image: "🍔",
    price: 5000,
  },
  {
    id: "karbala-pizza",
    name: "بيتزا كربلاء",
    category: "بيتزا • إيطالي",
    rating: "4.7",
    deliveryTime: "30 دقيقة",
    image: "🍕",
    price: 7000,
  },
  {
    id: "karbala-chicken",
    name: "دجاج كربلاء",
    category: "دجاج • وجبات سريعة",
    rating: "4.6",
    deliveryTime: "20 دقيقة",
    image: "🍗",
    price: 6000,
  },
];

export default function RestaurantsPage() {
  return (
    <main>
      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h1>المطاعم</h1>
            <p>اختر مطعمك المفضل واطلب وجبتك</p>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <article
                className="restaurant-card"
                key={restaurant.id}
              >
                <div className="restaurant-image">
                  {restaurant.image}
                </div>

                <div className="restaurant-info">
                  <h3>{restaurant.name}</h3>

                  <p>{restaurant.category}</p>

                  <div className="restaurant-meta">
                    <span>⭐ {restaurant.rating}</span>
                    <span>🚚 {restaurant.deliveryTime}</span>
                  </div>

                  <div style={{ marginTop: "16px" }}>
                    <AddButton
                      id={restaurant.id}
                      name={restaurant.name}
                      price={restaurant.price}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
