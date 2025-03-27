// components/WindowCleaning.tsx
import Image from "next/image";
import styles from "./windowCleaning.module.css";
import { FaPhone } from "react-icons/fa";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import Professional from "../../../../public/animations/residential-window.json";
import { Player } from "@lottiefiles/react-lottie-player";

const WindowCleaning = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Crystal-Clear Windows, Made Simple</h2>

          <div className={styles.textContent}>
            <p className={styles.paragraph}>
              At I Got The Power Washer, we’re here to make your windows
              shine—whether you’re in Cincinnati or beyond. Our goal is simple:
              to provide you with clean, streak-free windows that enhance your
              property’s look and let in more light.
            </p>
            <p className={styles.paragraph}>
              We use high-quality detergents, modern equipment, and proven
              techniques to remove dirt, dust, and grime from all types of glass
              surfaces. From homes and apartments to offices, schools, and
              commercial buildings, we handle it all. And for those
              hard-to-reach or high-rise windows? No problem. Our team is fully
              trained in safety protocols to ensure a smooth and secure cleaning
              process.
            </p>
            <p className={styles.paragraph}>
              We understand that window cleaning isn’t just about
              aesthetics—it’s about maintaining your property and protecting
              your investment. That’s why we take the time to do it right, so
              you can enjoy clear views and a polished look without the hassle.
            </p>
            <p className={styles.paragraph}>
              If you’re looking for reliable, professional window cleaning
              services that go the extra mile, we’ve got you covered. Let us
              help you see the difference clean windows can make!
            </p>
            <a href="tel:513-5700355" className={styles.ctaButton}>
              <FaPhone className={styles.phoneIcon} />
              <span className={styles.phoneNumber}>(513) 570-0355</span>
            </a>
          </div>
        </div>

        <div className={styles.imageColumn}>
        <div className={styles.lottieWrapper}>
            <Player
              autoplay
              loop
              src={Professional}
              className={styles.lottieAnimation}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/IMG-20250116-WA0037-e1738018013242.jpg"
              alt="Residential window cleaning"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WindowCleaning;
