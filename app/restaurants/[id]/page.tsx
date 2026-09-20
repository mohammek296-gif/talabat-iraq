import Link from "next/link";
import AddButton from "@/components/AddButton";

const restaurants = {
  "karbala-burger": {
    name: "مطعم كربلاء برغر",
    category: "برغر • وجبات سريعة",
    rating: "4.8",
    deliveryTime: "25 دقيقة",
    image: "🍔",
    description:
      "أشهى أنواع البرغر والوجبات السريعة في كربلاء.",
    menu: [
      {
        id: "burger-classic",
        name: "برغر كلاسيك",
        description: "برغر لحم مع جبن وخضار",
        price: 5000,
        image: "🍔",
      },
      {
        id: "burger-double",
        name: "دبل برغر",
        description: "قطعتان من اللحم مع الجبن",
        price: 7000,
        image: "🍔",
      },
    ],
  },

  "karbala-pizza": {
    name: "بيتزا كربلاء",
    category: "بيتزا • إيطالي",
    rating: "4.7",
    deliveryTime: "30 دقيقة",
    image: "🍕",
    description:
      "بيتزا طازجة بنكهات متنوعة ومكونات مختارة.",
    menu: [
      {
        id: "pizza-margherita",
        name: "بيتزا مارغريتا",
        description: "جبن وطماطم وصلصة خاصة",
        price: 7000,
        image: "🍕",
      },
      {
        id: "pizza-chicken",
        name: "بيتزا دجاج",
        description: "دجاج مع جبن وخضار",
        price: 8000,
        image: "🍕",
      },
    ],
  },

  "karbala-chicken": {
    name: "دجاج كربلاء",
    category: "دجاج • وجبات سريعة",
    rating: "4.6",
    deliveryTime: "20 دقيقة",
    image: "🍗",
    description:
      "وجبات دجاج شهية ومقرمشة للعائلة والأصدقاء.",
    menu: [
      {
        id: "chicken-meal",
        name: "وجبة دجاج",
        description: "دجاج مقرمش مع بطاطا ومشروب",
        price: 6000,
        image: "🍗",
      },
      {
        id: "crispy-chicken",
        name: "دجاج مقرمش",
        description: "قطع دجاج مقرمشة مع صوص خاص",
        price: 7000,
        image: "🍗",
      },
    ],
  },
} as const;

type RestaurantId = keyof typeof restaurants;

type RestaurantPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RestaurantPage({
  params,
}: RestaurantPageProps) {
  const { id } = await params;

  const restaurant =
    restaurants[id as RestaurantId];

  if (!restaurant) {
    return (
      <main>
        <section className="auth-section">
          <div className="auth-card">
            <h1>المطعم غير موجود</h1>

            <p>
              عذرًا، لم نتمكن من العثور على هذا المطعم.
            </p>

            <Link
              href="/restaurants"
              className="primary-button"
            >
              العودة إلى المطاعم
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="hero-badge">
              {restaurant.category}
            </span>

            <h1>{restaurant.name}</h1>

            <p>{restaurant.description}</p>

            <div
              className="restaurant-meta"
              style={{
                maxWidth: "300px",
                marginTop: "20px",
              }}
            >
              <span>⭐ {restaurant.rating}</span>
              <span>🚚 {restaurant.deliveryTime}</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="food-emoji">
              {restaurant.image}
            </div>

            <h2>{restaurant.name}</h2>

            <p>اختر وجبتك المفضلة من القائمة.</p>
          </div>
        </div>
      </section>

      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h2>قائمة الطعام</h2>
            <p>اختر الوجبة التي تريد إضافتها إلى السلة</p>
          </div>

          <div className="restaurant-grid">
            {restaurant.menu.map((item) => (
              <article
                className="restaurant-card"
                key={item.id}
              >
                <div className="restaurant-image">
                  {item.image}
                </div>
                import Link from "next/link";
import AddButton from "@/components/AddButton";

const restaurants = {
  "karbala-burger": {
    name: "مطعم كربلاء برغر",
    category: "برغر • وجبات سريعة",
    rating: "4.8",
    deliveryTime: "25 دقيقة",
    image: "🍔",
    description:
      "أشهى أنواع البرغر والوجبات السريعة في كربلاء.",
    menu: [
      {
        id: "burger-classic",
        name: "برغر كلاسيك",
        description: "برغر لحم مع جبن وخضار",
        price: 5000,
        image: "🍔",
      },
      {
        id: "burger-double",
        name: "دبل برغر",
        description: "قطعتان من اللحم مع الجبن",
        price: 7000,
        image: "🍔",
      },
    ],
  },

  "karbala-pizza": {
    name: "بيتزا كربلاء",
    category: "بيتزا • إيطالي",
    rating: "4.7",
    deliveryTime: "30 دقيقة",
    image: "🍕",
    description:
      "بيتزا طازجة بنكهات متنوعة ومكونات مختارة.",
    menu: [
      {
        id: "pizza-margherita",
        name: "بيتزا مارغريتا",
        description: "جبن وطماطم وصلصة خاصة",
        price: 7000,
        image: "🍕",
      },
      {
        id: "pizza-chicken",
        name: "بيتزا دجاج",
        description: "دجاج مع جبن وخضار",
        price: 8000,
        image: "🍕",
      },
    ],
  },

  "karbala-chicken": {
    name: "دجاج كربلاء",
    category: "دجاج • وجبات سريعة",
    rating: "4.6",
    deliveryTime: "20 دقيقة",
    image: "🍗",
    description:
      "وجبات دجاج شهية ومقرمشة للعائلة والأصدقاء.",
    menu: [
      {
        id: "chicken-meal",
        name: "وجبة دجاج",
        description: "دجاج مقرمش مع بطاطا ومشروب",
        price: 6000,
        image: "🍗",
      },
      {
        id: "crispy-chicken",
        name: "دجاج مقرمش",
        description: "قطع دجاج مقرمشة مع صوص خاص",
        price: 7000,
        image: "🍗",
      },
    ],
  },
} as const;

type RestaurantId = keyof typeof restaurants;

type RestaurantPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RestaurantPage({
  params,
}: RestaurantPageProps) {
  const { id } = await params;

  const restaurant =
    restaurants[id as RestaurantId];

  if (!restaurant) {
    return (
      <main>
        <section className="auth-section">
          <div className="auth-card">
            <h1>المطعم غير موجود</h1>

            <p>
              عذرًا، لم نتمكن من العثور على هذا المطعم.
            </p>

            <Link
              href="/restaurants"
              className="primary-button"
            >
              العودة إلى المطاعم
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div>
            <span className="hero-badge">
              {restaurant.category}
            </span>

            <h1>{restaurant.name}</h1>

            <p>{restaurant.description}</p>

            <div
              className="restaurant-meta"
              style={{
                maxWidth: "300px",
                marginTop: "20px",
              }}
            >
              <span>⭐ {restaurant.rating}</span>
              <span>🚚 {restaurant.deliveryTime}</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="food-emoji">
              {restaurant.image}
            </div>

            <h2>{restaurant.name}</h2>

            <p>اختر وجبتك المفضلة من القائمة.</p>
          </div>
        </div>
      </section>

      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h2>قائمة الطعام</h2>
            <p>اختر الوجبة التي تريد إضافتها إلى السلة</p>
          </div>

          <div className="restaurant-grid">
            {restaurant.menu.map((item) => (
              <article
                className="restaurant-card"
                key={item.id}
              >
                <div className="restaurant-image">
                  {item.image}
                </div>
