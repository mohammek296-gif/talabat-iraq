import Link from "next/link";
import Header from "@/components/Header";

const categories = [
  { name: "مطاعم", icon: "🍽️" },
  { name: "برغر", icon: "🍔" },
  { name: "بيتزا", icon: "🍕" },
  { name: "دجاج", icon: "🍗" },
  { name: "حلويات", icon: "🍰" },
  { name: "مشروبات", icon: "🥤" },
];

const restaurants = [
  {
    id: "karbala-burger",
    name: "مطعم كربلاء برغر",
    category: "برغر • وجبات سريعة",
    rating: "4.8",
    deliveryTime: "25 دقيقة",
    image: "🍔",
  },
  {
    id: "karbala-pizza",
    name: "بيتزا كربلاء",
    category: "بيتزا • إيطالي",
    rating: "4.7",
    deliveryTime: "30 دقيقة",
    image: "🍕",
  },
  {
    id: "karbala-chicken",
    name: "دجاج كربلاء",
    category: "دجاج • وجبات سريعة",
    rating: "4.6",
    deliveryTime: "20 دقيقة",
    image: "🍗",
  },
];

export default function HomePage() {
  return (
    <main>
      <Header />

      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="hero-badge">
              🍴 توصيل الطعام في كربلاء
            </span>

            <h1>
              اطلب أكلك المفضل
              <br />
              <span>ونوصله لباب بيتك</span>
            </h1>

            <p>
              اكتشف أفضل المطاعم في كربلاء واطلب وجبتك بسهولة وسرعة.
            </p>

            <div className="hero-actions">
              <Link
                href="/restaurants"
                className="primary-button"
              >
                تصفح المطاعم
              </Link>

              <Link
                href="/orders"
                className="secondary-button"
              >
                متابعة طلباتي
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <div className="food-emoji">🍔</div>

            <h2>وجبتك أقرب مما تتوقع</h2>

            <p>
              اطلب الآن واستمتع بطعامك المفضل.
            </p>
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="section-heading">
            <h2>ماذا تشتهي اليوم؟</h2>

            <p>اختر نوع الطعام الذي تفضله</p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                href="/restaurants"
                className="category-card"
                key={category.name}
              >
                <span className="category-icon">
                  {category.icon}
                </span>

                <span>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h2>مطاعم مميزة</h2>

            <p>
              اكتشف المطاعم المتاحة بالقرب منك
            </p>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((restaurant) => (
              <article
                className="restaurant-card"
                key={restaurant.id}
              >
                <Link
                  href={/restaurants/${restaurant.id}}
                >
                  <div className="restaurant-image">
                    {restaurant.image}
                  </div>
                </Link>

                <div className="restaurant-info">
                  <Link
                    href={/restaurants/${restaurant.id}}
                  >
                    <h3>{restaurant.name}</h3>
                  </Link>

                  <p>{restaurant.category}</p>

                  <div className="restaurant-meta">
                    <span>
                      ⭐ {restaurant.rating}
                    </span>

                    <span>
                      🚚 {restaurant.deliveryTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
<footer className="footer">
        <div className="container">
          <h3>كربلاء فود</h3>

          <p>
            منصة طلب وتوصيل الطعام في كربلاء
          </p>

          <p>
            © 2026 كربلاء فود. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </main>
  );
}
