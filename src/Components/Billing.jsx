import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        //! yani ta sm dide she badesh hidden she
        <p className={`${styles.paragraph} w-max-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          incidunt porro aliquam totam nam ratione blanditiis enim vel eius
          quaerat.
        </p>
      </div>
    </div>
  </section>
);

export default Billing;
