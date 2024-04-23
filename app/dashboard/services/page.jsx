// pages/ServicesPage.js
'use client'
import Link from 'next/link';
import styles from 'app/ui/dashboard/services/services.module.css';
import Search from '@/app/ui/dashboard/search/search';
import {PrismaClient} from '@prisma/client';
import {readServices} from "@/app/actions/readAction";
import {useEffect, useState} from "react";

export default function ServicesPage(){
    const [services, setServices] = useState([])
    useEffect(() => {
        const fetchServices = async () => {
            const servicesData = await readServices();
            setServices(servicesData);
        };
        fetchServices();
    }, []);
    console.log(services)
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {/*<Search placeholder="Search for a service..." />*/}
                <Link href="services/add">
                    <button className={styles.addButton}>Add New Service</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>Service Name</td>
                    <td>Cost</td>
                    <td>Profit</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {services.map((service) => (
                    <tr key={service.serviceId}>
                        <td>{service.serviceName}</td>
                        <td>{service.serviceCost}</td>
                        <td>{service.serviceProfit}</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/services/edit/${service.serviceId}`}>
                                     {/*<button className={`${styles.button} ${styles.view}`}>Edit</button>*/}
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
