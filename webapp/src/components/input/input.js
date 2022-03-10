import React from "react";
import { FormControl, InputGroup } from 'react-bootstrap/InputGroup';
import "./input.css";

export function Input({ placeholder }) {
  return (
    <InputGroup className="mb-3">
    <FormControl
    	placeholder={placeholder}
    	aria-label={placeholder}
    />
    </InputGroup>
  );
}