import { VStack } from "@chakra-ui/react";
import { Nav } from "./components/nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <VStack w="full" spacing={0}>
      <Nav />
      <Outlet />
    </VStack>
  );
}

export default App;
