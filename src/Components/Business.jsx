import { features } from "../Constants";
import styles, { layout } from "../style";
import Button from "./Button";

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        you can do the Business, <br className="sm:block hidden" />
        We'll handle the money.
      </h2>
      <p className={`${styles.paragraph}`}>
        with the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" />
    </div>
  </section>
);

export default Business;
