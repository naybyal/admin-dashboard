import styles from '../ui/dashboard/dashboard.module.css'
import Card from "@/app/ui/dashboard/card/card";
import Transactions from "@/app/ui/dashboard/transactions/transactions";
import Rightbar from "@/app/ui/dashboard/rightbar/rightbar";
function Dashboard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    );
}

export default Dashboard;
