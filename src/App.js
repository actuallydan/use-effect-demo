import { useEffect, useState, useRef } from "react";
import { Input, Flex, Button, Stack } from "@chakra-ui/react";

import { isEmailValid, missingElements } from "./utils";

function App() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [missingPasswordReqs, setMissingPasswordReqs] = useState();
  const inputRef = useRef(null);

  // auto focus on mount

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  return (
    // this is the page wrapper
    <Flex
      w={"100vw"}
      h="100vh"
      align="center"
      justify="center"
      m="1em"
      direction="column"
    >
      {/* the stack component is the centered form with border-radius */}
      <Stack
        w={["100vw", "75vw", "50vw"]}
        justify="left"
        direction="column"
        borderWidth="1px"
        borderRadius="lg"
        p="1em"
        spacing={4}
        align={""}
      >
        <p>I'm the best input form in the world</p>
        <Input
          value={email}
          placeholder="Please enter your email address"
          onChange={updateEmail}
          ref={inputRef}
        />
        {/* error handler */}
        <Button colorScheme="teal" variant="solid">
          Validate
        </Button>
      </Stack>
    </Flex>
  );
}

export default App;
