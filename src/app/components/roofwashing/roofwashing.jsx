// components/RoofWashing.tsx
import Image from 'next/image';
import styles from './roofwashing.module.css';

const RoofWashing = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageGrid}>
        <div className={styles.mainImage}>
          <Image
            src="/images/unnamed.jpg"
            alt="Roof cleaning process"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.sideImages}>
          <div className={styles.sideImage}>
            <Image
              src="/images/RoofWashing-1040x520-1.jpg"
              alt="Before cleaning"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.sideImage}>
            <Image
              src="/images/IMG-20250116-WA0019-1536x1152.jpg"
              alt="After cleaning"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.strongLine}>
            Here is a close up of our detergent breaking down the organic material
          </div>
        </div>
      </div>
      
      

      <div className={styles.content}>
        <h2 className={styles.heading}>Why Should You Get a Roof Wash?</h2>
        <div className={styles.textContent}>
          <p className={styles.paragraph}>
            lifespan, and functionality. Over time, dirt, algae, moss, and other debris can accumulate, not only making your roof look unsightly but also causing long-term damage. Algae, for instance, can eat away at roofing materials, while moss holds moisture that can lead to leaks and structural issues.
          </p>
          <p className={styles.paragraph}>
            By scheduling a roof washing service in Cincinnati, OH, you can prevent these problems and extend the life of your roof, saving you from costly repairs or replacements. A professional *roof washing service* also boosts your home’s curb appeal, increasing its value and giving it a fresh, well-maintained look. Whether you’re protecting your investment or preparing to sell, roof washing is a simple yet impactful way to keep your property in top condition.
          </p>
          <p className={`${styles.paragraph} ${styles.callout}`}>
            <strong>Have a question on your roof wash? Call Us! 513-5700355</strong> 
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoofWashing;