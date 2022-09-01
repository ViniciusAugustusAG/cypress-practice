/// <reference types="cypress"/>

describe("Contact us interactions", () => {
    beforeEach(() => {
        cy.visit("/Contact-Us/contactus.html")
    })

    it("should submit contact sucssefully", () => {
        cy.get("form").get("input[name='first_name']")
        .type("Victor");
        
        cy.get("form").get("input[name='last_name']")
        .type("Frankenstein");

        cy.get("form").get("input[name='email']")
        .type("email@email.com");

        cy.get("form").get("textarea[name='message']")
        .type("I give you life! Live my creature, live!");

        cy.get("form").get("input[type='submit']").click();

        cy.contains("Thank You for your Message!").should("be.visible");
    })

    it("submits invalid email adress", () => {

        cy.get("form").get("input[name='first_name']")
        .type("Victor");
        
        cy.get("form").get("input[name='last_name']")
        .type("Frankenstein");

        cy.get("form").get("input[name='email']")
        .type("not valid email");

        cy.get("form").get("textarea[name='message']")
        .type("I give you life! Live my creature, live!");

        cy.get("form").get("input[type='submit']").click();

        cy.contains("Error: Invalid email address").should("be.visible");
    })

    it("submits empty first name", () => {
        cy.get("form").get("input[name='last_name']")
        .type("Frankenstein");

        cy.get("form").get("input[name='email']")
        .type("email@email.com");

        cy.get("form").get("textarea[name='message']")
        .type("I give you life! Live my creature, live!");

        cy.get("form").get("input[type='submit']").click();

        cy.contains("Error: all fields are required").should("be.visible");
    })
    
    it("submits empty last name", () => {
        cy.get("form").get("input[name='first_name']")
        .type("Victor");
        
        cy.get("form").get("input[name='email']")
        .type("email@email.com");

        cy.get("form").get("textarea[name='message']")
        .type("I give you life! Live my creature, live!");

        cy.get("form").get("input[type='submit']").click();

        cy.contains("Error: all fields are required").should("be.visible");
    })
    
    it("submits empty comment message", () => {
        cy.get("form").get("input[name='first_name']")
        .type("Victor");

        cy.get("form").get("input[name='last_name']")
        .type("Frankenstein");

        cy.get("form").get("input[name='email']")
        .type("email@email.com");

        cy.get("form").get("input[type='submit']").click();

        cy.contains("Error: all fields are required").should("be.visible");
    })
})