import { VStack } from "@chakra-ui/react";
import { Nav } from "./components/nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <VStack w="full" spacing={0}>
      <Nav />
      <Outlet />
      <Footer />
    </VStack>
  );
}

export default App;
