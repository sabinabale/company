import Link from "next/link";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

import prisma from "@/lib/db";

export default async function List() {
  const companies = await prisma.client.findMany();
  return (
    <div className="border rounded-xl bg-white">
      <ListHeader>CLIENT NAME</ListHeader>
      {companies.map((company) => (
        <Link key={company.id} href={`/app/clients/${company.id}`}>
          <ListItem>{company.name}</ListItem>
        </Link>
      ))}
    </div>
  );
}
