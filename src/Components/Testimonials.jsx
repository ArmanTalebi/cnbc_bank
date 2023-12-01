import { feedback } from "../Constants";
import styles from "../style";
import Feedback from "./FeedBack";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    //Todo
    <div />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us!
      </h1>
    </div>
  </section>
);

export default Testimonials;
