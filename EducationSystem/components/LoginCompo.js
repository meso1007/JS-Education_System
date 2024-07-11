export default class LoginCompo{
    elements = [{
        name:'',
        type:'',
        placeHolder:'',
        required:false,
        options:[{
            value:'',
            text:''
        }]
    }];
    buttons = [{
        type:'',
        text:'',
        color:'',
        disable:false
    }];
    constructor(id,elements,buttons){
        this.elements = elements
        this.id = id;
        this.buttons = buttons;
    }
    
    buttonGen(btnElement){
        const btn = $("<button class='m-1'></button>");
        btn.attr("type",btnElement.type);
        btn.text(btnElement.text);
        btn.addClass(`btn btn-outline-${btnElement.color}`);
        if(btnElement.disable != undefined && btnElement.disable == true){
            btn.attr("disabled",'')
        }
        return btn;
    }
    elementGen(){
        const form = $("<form></form>");
        form.attr("id",this.id);
        for(let element of this.elements){
            let formElement = $("<div class='mb-3'></div>");
            switch(element.type){
                case "select":
                    const selectElement = $("<select class='form-select form-select-lg'></select>");
                    selectElement.attr("name",element.name);
                    if(element.required)
                        selectElement.attr("required","");
                    const selectLbl = $("<label class='form-label'></label>");
                    selectLbl.attr("for",element.name);
                    selectLbl.text(element.placeHolder);
                    for(let option of element.options){
                        const selectOption = $("<option></option>");
                        selectOption.val(option.value);
                        selectOption.text(option.text);
                        selectElement.append(selectOption);
                    }
                    formElement.append(selectLbl,selectElement);
                break;
                case "textarea":
                break;
                default:
                    formElement.addClass("form-floating");
                    const inputElement = $("<input />");
                    inputElement.attr("type",element.type);
                    inputElement.attr("name",element.name);
                    inputElement.attr("placeholder",element.placeHolder);
                    inputElement.addClass("form-control");
                    if(element.required)
                        inputElement.attr("required","");
                    const inputLbl = $("<label></label>");
                    inputLbl.attr("for",element.name);
                    inputLbl.text(element.placeHolder);
                    formElement.append(inputElement,inputLbl);
            }
            form.append(formElement);
        }
        for(let btnElement of this.buttons){
            form.append(this.buttonGen(btnElement));
        }
        return form;
    }
}