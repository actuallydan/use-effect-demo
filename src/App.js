import { useEffect, useState } from "react";
import { Input, Flex } from "@chakra-ui/react";

import { isEmailValid, missingElements } from "./utils";

function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [missingPasswordReqs, setMissingPasswordReqs] = useState();

  return (
    <Flex
      w={"100vw"}
      h="100vh"
      align="center"
      justify="center"
      m="1em"
      direction="column"
    >
      <Flex
        w={["100vw", "75vw", "50vw"]}
        align="center"
        justify="center"
        direction="column"
      >
        <p>I'm the best input form in the world</p>
        <Input placeholder="Please enter your email address" />
        {/* error handler */}
        {/* password requirements */}
      </Flex>
    </Flex>
  );
}

export default App;
