import List from "@/components/List";
import Searchbar from "@/components/Searchbar";
import TabHeading from "@/components/TabHeading";
import AddClientButton from "@/components/buttons/AddClientButton";
import Container from "@/layout/Container";

import Header from "@/layout/Header";
import React from "react";

export default function Page() {
  return (
    <div className="mt-[60px]">
      <Container>
        <Header>
          <TabHeading>Clients</TabHeading>
          <div className="flex gap-3">
            <Searchbar />
            <AddClientButton />
          </div>
        </Header>
        <div>
          <List />
        </div>
      </Container>
    </div>
  );
}
