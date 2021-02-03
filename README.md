# Rad Inputs

A `create-react-app` to mess about with `useEffect` and other hooks

# Installation

For not having to deal with visual ugliness this uses [@chakra-ui](https://chakra-ui.com/docs/getting-started). Install it and it's dependencies with the snippet below

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion --legacy-peer-deps
```

# Run

```
npm start
```

1. Use `useEffect` and `useRef` to focus the browser's input on component mount
2. When the user clicks "Validate" button, check that the input text is a valid email string
   a. If it is valid, replace the input with a success alert
   b. If it is not, display an error
   i. Make the error disappear after an amount of time or on subsequent input

3. Duplicate this markup for a password component
4. While the password component is focused give the user a list of requirements it needs to meet and update those requirements as they type
5. When the user clicks "Validate" button, check that both inputs are valid
   a. If either is invalid, display an error

6. Componentize the inputs to make them generic so we can cut down on duplicated code
