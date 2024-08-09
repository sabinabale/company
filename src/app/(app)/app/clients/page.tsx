import List from "@/components/List";
import Searchbar from "@/components/Searchbar";
import H1 from "@/components/H1";
import AddClientButton from "@/components/buttons/AddClientButton";
import Container from "@/layout/Container";
import Header from "@/layout/Header";

export default function Page() {
  return (
    <div className="mt-[60px]">
      <Container>
        <Header>
          <H1>Clients</H1>
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
