import Banner from "../../src/components/banner/banner";
import ArrayFeatures from "../../src/components/features/featuresItem.json";
import Features from "../../src/components/features/feature";
import "../../src/css/main.css"

function HomePage() {
    return (
        <main>
            <Banner />
            <section className="features">
                {ArrayFeatures.map((features, index) => (
                    <Features
                        key={index}
                        img={features.img}
                        title={features.title}
                        content={features.content}
                    />
                ))}
            </section>
        </main>
    );
}

export default HomePage;