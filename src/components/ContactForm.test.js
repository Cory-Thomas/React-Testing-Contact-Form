import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

test('Renders without crashing', () => {
    render(<ContactForm />)
})

test('adds and checks new data on form', () => {
    
    render(<ContactForm />)

    const firstName = screen.getByTestId(/firstName/)
    const lastName = screen.getByTestId(/lastName/)
    const email = screen.getByTestId(/email/)
    const message = screen.getByTestId(/message/)
   
    fireEvent.change(firstName, { target: { value: 'Edd' } }); 
    // fireEvent.change(firstName, { target: { value: 'Eddd' } }); Causes error since it's over 3 characters     
    fireEvent.change(lastName, { target: { value: 'Burke' } });
    fireEvent.change(email, { target: { value: 'edd@gmail.com' } });
    fireEvent.change(message, { target: { value: 'Message here' } }); 

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    const submitButton = screen.getByTestId(/submit/i)
    
    act(() => {
        fireEvent.click(submitButton);
    });    
   
    expect(firstName).toHaveValue('Edd');
    expect(lastName).toHaveValue('Burke');
    expect(email).toHaveValue('edd@gmail.com');
    expect(message).toHaveValue('Message here');
})