import { IServiceItem } from "@/types";
import { getImagePath } from "@/utils/getImagePath";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    icons: [
      getImagePath("/skills/redux.svg"),
      getImagePath("/skills/react.svg"),
      getImagePath("/skills/nextjs.png"),
      getImagePath("/skills/html.svg"),
      getImagePath("/skills/css.svg"),
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      getImagePath("/skills/socket-io.png"),
      getImagePath("/skills/docker.png"),
      getImagePath("/skills/nodejs.svg"),
      getImagePath("/skills/express.svg"),
      getImagePath("/skills/aws.svg"),
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 3,
    title: "Database Management",
    icons: [
      getImagePath("/skills/mysql.svg"),
      getImagePath("/skills/postgresql.svg"),
      getImagePath("/skills/mongodb.svg"),
      getImagePath("/skills/redis.svg"),
      getImagePath("/skills/sqlite.svg"),
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
];

export default services;
