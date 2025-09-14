import styles from "./locations.module.css"
import {dataLocations} from "@/assets/data/locations";
import CardLocation from "@/components/cardLocation/CardLocation";

export default function Locations() {


    return (
        <>
        <section className={styles.locations}>
            {dataLocations.map((location) => (
                <section key={location.id}>
                    <CardLocation dataLocation={location} />
                </section>
            ))}
        </section>
        </>
    )
}