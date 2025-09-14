import styles from "./locations.module.css"
import {dataLocations} from "@/assets/data/locations";
import CardLocation from "@/components/cardLocation/CardLocation";

export default function Locations() {


    return (
        <>
        <section className={styles.section} >
            <h2 className={styles.h2}>{"Découvrez nos hébergements"}</h2>

            <section  className={styles.locations}>
                {dataLocations.map((location) => (
                        <CardLocation key={location.id} dataLocation={location} />
                ))}
            </section>
        </section>
        </>
    )
}