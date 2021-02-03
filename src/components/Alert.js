import { Alert } from "@chakra-ui/react";

export default function FancyAlert({ status, children }) {
  if (status === "error") {
    return <Alert status="error">! {children}</Alert>;
  }

  return <Alert status="success">&#10003; {children}</Alert>;
}
