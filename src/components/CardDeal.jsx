import styles, {layout} from "../style"
import { card } from "../assets"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5  `}>
        Arcu tortor, purus in mattis at sed integer faucibus. 
        Aliquet quis aliquet eget mauris tortor.ç Aliquet 
        ultrices ac, amatau.
        </p>
      <Button styles={`mt-5 rounded-lg`}/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-full h-full"/>
      </div>

    </section>
  )
}

export default CardDeal;