class Calculator{
    stringEval:string='';

    ReverseString:(str:string) => string = (str:string) => str.split('').reverse().join('');

    addEventListeners=()=>{
        const btnElements:NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
        btnElements.forEach((btn)=>{
            btn.addEventListener('click',(event)=>{
                //console.log(event);
                this.addToString(btn);
            });
        });
    }

    addToString:(btn:HTMLButtonElement)=>void = (btn:HTMLButtonElement)=>{
        const display:HTMLInputElement|null=document.querySelector('input') as HTMLInputElement;
        if (btn.value==='all-clear'){
            this.stringEval='';
            display.value=this.stringEval;
            return;
        }
        else if(btn.value==='='){
            try{
            display.value=eval(this.stringEval);
            
            }
            catch(err){
                display.value="invalid expression";
                this.stringEval='';
                //alert("invalid expression");
            }
            return;
        }
        this.stringEval+=btn.value;
        display.value=this.stringEval;
        return;
    }

    init(){
        this.addEventListeners();
    }
}

const calculator = new Calculator();
calculator.init();
