/// <reference types="cypress" />

describe("todo-list ", () => {
    beforeEach(()=>{
        cy.visit("/To-Do-List/");
    })
    
    it("should add new todo to list", () =>{
        cy.get("input[placeholder='Add new todo']").click()
        .type("Do the dishes {enter}");
        cy.contains("Do the dishes").should("be.visible");
    })
    
    it("should hide add new todo input", () => {
        cy.get("#plus-icon").click();
        cy.get("input").should("not.be.visible");
    })
        
    it("should delet todo list item", () => {
        cy.get("li").contains("Go to potion class")
        .children().children()
        .invoke('show').click();
    })
    
    
})