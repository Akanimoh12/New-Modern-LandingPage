import { stats } from "../constants"
import styles from "../style"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:my-20`}>
      {stats.map((stats)=>(
        <div key={stats.id} className={`flex-1 flex justify-start items-center flex-row m-3 `}>
          <h4 className="font-poppins font-semibold xs:leading-[53px] xs:text-[40px] text-[30px] leading-[43px] text-white  ">
            {stats.value}
          </h4>
          <p className="font-poppins font-normal xs:leading-[26px] xs:text-[20px] text-[15px] leading-[21px] text-gradient uppercase ml-3  ">
            {stats.title}            
          </p>
          
        </div>
      ))}
    </section>
  )

export default Stats;