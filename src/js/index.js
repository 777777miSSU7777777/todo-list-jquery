"use strict";

function createTODOValueNode(){
    return $("<td />",{
        class: "todo-list-value"
    }).text($("#todo-value").val());
}

function createTODOEditButton(){
    return $("<button />",{
        class: "todo-edit-button no-border"
    });
}

function createTODODeleteButton(){
    return $("<button />",{
        class: "todo-delete-button no-border"
    });
}

function createTODOEditInput(){
    return $("<input />",{
        class: "todo-input-area edit"
    });
}
function createTODOSaveButton(){
    return $("<button />",{
        class: "todo-save-button no-border"
    });
}

function createTODOSaveCancelButton(){
    return $("<button />",{
        class: "todo-save-cancel-button no-border"
    });
}

function tdNodeWrapper(node){
    return $("<td />").append(node)
}

function switchButtonsToEditMode(node){
    let editButton = $(node).find(".todo-edit-button");
    $(editButton).replaceWith(createTODOSaveButton());

    let deleteButton = $(node).find(".todo-delete-button");
    $(deleteButton).replaceWith(createTODOSaveCancelButton());
}

function switchButtonsToShowMode(node){
    let saveButton = $(node).find(".todo-save-button");
    $(saveButton).replaceWith(createTODOEditButton());

    let saveCancelButton = $(node).find(".todo-save-cancel-button");
    $(saveCancelButton).replaceWith(createTODODeleteButton());
}

$(document).ready(function(){
    $(".add-todo-button").click(function(){
        let  todoElement = $("<tr />", {
            class: "todo-element"
        });
        let todoListValueNode = createTODOValueNode();
        let todoEditButton = tdNodeWrapper( createTODOEditButton() );
        let todoDeleteButton = tdNodeWrapper( createTODODeleteButton() );
        todoElement.append(todoListValueNode).append(todoEditButton ).append(todoDeleteButton);
        $("#todo-list-container-body").append(todoElement);
    })
})

$(document).on("click", ".todo-delete-button", function(){
    $(this).parent().parent().remove();
})

$(document).on("click", ".todo-edit-button", function(){
    let elementNode = $(this).parent().parent();
    let currentNode = $(elementNode).find(".todo-list-value");
    let currentValue = $(currentNode).text();
    $(currentNode).text("");

    let editNode = createTODOEditInput();
    $(editNode).val(currentValue);
    editNode.get(0).previousValue = currentValue;
    $(currentNode).append(editNode);

    switchButtonsToEditMode(elementNode);
})

$(document).on("click", ".todo-save-button", function(){
    let elementNode = $(this).parent().parent();
    let editNode = $(elementNode).find(".todo-input-area.edit");
    let newValue = $(editNode).val();

    $(editNode).remove();
    $($(elementNode).find(".todo-list-value")).text(newValue);

    switchButtonsToShowMode(elementNode);
})

$(document).on("click", ".todo-save-cancel-button", function(){
    let elementNode = $(this).parent().parent();
    let editNode = $(elementNode).find(".todo-input-area.edit");

    $(editNode).remove();
    $($(elementNode).find(".todo-list-value")).text(editNode.get(0).previousValue);

    switchButtonsToShowMode(elementNode);
})



