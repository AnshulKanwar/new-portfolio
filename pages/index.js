import styles from "../styles/Home.module.css";
import Dock from "../components/Dock";
import MenuBar from "../components/MenuBar";
import Window from "../components/Window";

export default function Home() {
  return (
    <div className={styles.background}>
      <div className="absolute top-0 w-screen min-w-fit">
        <MenuBar />
      </div>
      <div className="w-fit h-fit max-w-xl">
        <Window />
      </div>
      <div className="absolute bottom-3 w-screen min-w-fit">
        <Dock />
      </div>
    </div>
  );
}
