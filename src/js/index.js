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
    return $("<button /",{
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

