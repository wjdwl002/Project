export class Button{
    constructor(window, values, type){
        this.window = window;
        this.values = values;

        var button = document.getElementById('button');
        for(var i =0; i<this.values.length; i++){
            button.appendChild(document.createElement('div'));
            var newInput = document.createElement('input');
            newInput.setAttribute('type','radio');
            newInput.setAttribute('name',this.values[i]);
            newInput.setAttribute('value',this.values[i]);
            newInput.setAttribute('onclick','changeVal(event)');
            newInput.innerHTML = this.values[i];
            button.appendChild(newInput);
        }
    }
}






