    var temporaridisplay;
    var displaylist=document.getElementsByClassName('display')
    var displaynumeric=document.getElementsByClassName('numeric')
    var displayclear=document.getElementsByClassName('cleardisplay')
    var displayclearall=document.getElementsByClassName('cls')
    var displaysimbol=document.getElementsByClassName('simbol')
    var lengthdisplay=displaylist.length
    var lengthnumeric=displaynumeric.length
    var lengthsimbol=displaysimbol.length
    var lengthcleardisplay=displayclear.length
    var lengthcleardisplayall=displayclearall.length
   
    for (var i=0; i<lengthdisplay; i++){
        var singledisplay=displaylist[i]

        singledisplay.onclick=function(e){
            temporaridisplay=this.id
            console.log(temporaridisplay)
        }

        singledisplay.onkeyup=function(e){
            if (!this.value.match('^[0-9]*$')){
                this.value=''
            }
        }
    }
    
    for (var i=0; i<lengthnumeric; i++){
        var singlenumeric=displaynumeric[i]

        singlenumeric.onclick=function(e){
            var singledisplaybyclick=document.getElementById(temporaridisplay)
            singledisplaybyclick.value=singledisplaybyclick.value+this.innerHTML
        }
    }

    for (var i=0; i<lengthsimbol; i++){
        var singlesimbol=displaysimbol[i]

        singlesimbol.onclick=function(e){
            var singlesimbolbyclick=document.getElementById(temporaridisplay)
            singlesimbolbyclick.value=singlesimbolbyclick.value+this.innerHTML
        }
    }

    for (var i=0; i<lengthcleardisplay; i++){
        var singlecleardisplay=displayclear[i]

        singlecleardisplay.onclick=function(){
            var singleclearbyclick=document.getElementById(temporaridisplay)
            singleclearbyclick.value=''
        }
    }

    
    function clearDisplayall() {
        for (var i=0; i<lengthcleardisplayall; i++){
            displayclearall[i].value=''
        }
        document.getElementById('jawaban').innerHTML = '';
    }

    function calculate() {

            var a = document.getElementById("input1").value;
            var ax = document.querySelector(".kuadrat").innerText;
                ax = ax.replace("X2", "x²");
            var operator1= document.getElementById("operator1").value;
            var b = document.getElementById("input2").value;
            var bx = document.querySelector(".bx").innerText;
            var operator2= document.getElementById("operator2").value;
            var c = document.getElementById("input3").value;
            var nol = document.querySelector(".NOL").innerText;
            
            let jawaban = "";
            let diskriminan= "";
                                  
            a=parseInt(a);
            b=parseInt(b);
            c=parseInt(c);
            if (operator1 === '+') {
                b = b;
            } else if (operator1 === '-') {
                b = `${ -b }`;
            }

            if (operator2 === '+') {
                c = c;
            } else if (operator2 === '-') {
                c = `${ -c }`;
            }

                    
          diskriminan +=b * b - 4 * a * c;

          if (operator1 === '+') {
            operator1 = `+`+`${ +b }`;
            } else if (operator1 === '-') {
            operator1 = `-`+`${ -b }`;
            }

            if (operator2 === '+') {
                operator2 = `+`+`${ +c }`;
                } else if (operator2 === '-') {
                operator2 = `-`+`${ -c }`;
                }
                     
            jawaban += a+"\n" + 
                        ax+ "\n" +
                        operator1 + "\n" +
                        bx+ "\n" +
                        operator2 + "\n" +
                        nol+"<br>"+"<br>";

            jawaban +="Diketahui nilai: <br>";
            jawaban +="a="+ (a) +"<br>"
            jawaban +="b="+ (b) +"<br>"
            jawaban +="c="+ (c) +"<br>"+"<br>"
            
            jawaban +="Diskriminan: b²-4.a.c <br>"
            if (b<0 & c<0){
                jawaban +="<=======>= "+ `(${b})²- 4.${a}.(${c})<br>`
            } else if (b>0 & c>0){            
                jawaban +="<=======>= "+ `${b}²- 4.${a}.${c}<br>`
            } else if (b>0 & c<0){
                 jawaban +="<=======>= "+ `${b}²- 4.${a}.(${c})<br>`
            } else if (b<0 & c>0){
                 jawaban +="<=======>= "+ `(${b})²- 4.${a}.${c}<br>`
            }

            if ((4*a)*c<0){
                jawaban +="<=======>="+""+(b*b)+""+'- ('+((4*a)*c)+")<br>"
            } else if ((4*a)*c>0){
                jawaban +="<=======>= "+(b*b)+'-'+((4*a)*c)+"<br>"
            }

            if (diskriminan>0){
                jawaban +="<=======>="+ `${(diskriminan)} --> Akar berbeda <br>`;
            } else if(diskriminan<0){
            jawaban +="<=======>="+ `${(diskriminan)} --> Akar imajiner <br>`
            } else {
            jawaban +="<=======>="+ `${(diskriminan)} --> Akar kembar <br>`
            }

            let x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
            let x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);

 //rumus ABC           
jawaban += ` 
    <div class="center-container">
        <div class="formula">
        <div class="rumus">
            <div class="numerator">
                <div class="x1">x<sub>1,2</sub>=</div>
                    <span class="underline-section">
                        <span>-b ±</span>
                            <span class="akar">
                                <span class="radical">√</span>
                            <span>b² - 4.a.c</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">2.a</div>
        </div>
    </div>
    </div>`;

    
// MENCARI X1     
jawaban += "Mencari x1: <br>"
    jawaban += `
        <div class="left-container">
            <div class="formula">
                <div class="numerator">
                    <div class="x1">x<sub>1</sub>=</div>
                        <span class="underline-section">
                            <span>-(${b})+</span>
                                <span class="akar">
                                <span class="radical">√</span>
                            <span>${b}² - 4 .${a} .${c}</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">2.${a}</div>
        </div>
    </div>`;

jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
                <div class="x1">x<sub>1</sub>=</div>
                    <span class="underline-section">
                        <span>${-1*b}+</span>
                            <span class="akar">
                                <span class="radical">√</span>
                            <span>${Math.pow(b, 2)} - (${4*a*c})</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">${2*a}</div>
        </div>
    </div>`;

    
jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
                <div class="x1">x<sub>1</sub>=</div>
                    <span class="underline-section">
                        <span>${-1*b}+</span>
                            <span class="akar">
                                <span class="radical">√</span>
                            <span>${diskriminan}</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">${2*a}</div>
        </div>
    </div>`;

jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
            <div class="x1">x<sub>1</sub>=</div>
                 <span class="underline-section">
                        <span>${-1*b}+</span>
                        <span>${(Math.sqrt(diskriminan))}</span>
                    </span>
                </span>
            </div>
            <div class="denominator">${2*a}</div>
        </div>
    </div>`;

jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
            <div class="x1">x<sub>1</sub>=</div>
                        <span class="underline-section">
                        <span>${-1*b+Math.sqrt(diskriminan)}</span>
                </span>
            </div>
        <div class="denominator">${2*a}</div>
    </div>
</div>`;
            
                       
jawaban += `
    <div class="left-container">
    <div class="formula">
    <div class="x1">x<sub>1</sub>=${x1}
    </div>
    </div>
    </div>`;

// MENCARI X2
jawaban += "Mencari x2: <br>"
    jawaban += `
        <div class="left-container">
            <div class="formula">
                <div class="numerator">
                    <div class="x2">x<sub>2</sub>=</div>
                        <span class="underline-section">
                            <span>-(${b})-</span>
                                <span class="akar">
                                <span class="radical">√</span>
                            <span>${b}² - 4 .${a} .${c}</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">2.${a}</div>
        </div>
    </div>`;

jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
                <div class="x2">x<sub>2</sub>=</div>
                    <span class="underline-section">
                        <span>${-1*b}-</span>
                            <span class="akar">
                                <span class="radical">√</span>
                            <span>${Math.pow(b, 2)} - (${4*a*c})</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">${2*a}</div>
        </div>
    </div>`;

jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
                <div class="x2">x<sub>2</sub>=</div>
                    <span class="underline-section">
                        <span>${-1*b}-</span>
                            <span class="akar">
                                <span class="radical">√</span>
                            <span>${diskriminan}</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">${2*a}</div>
        </div>
    </div>`;

jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
                <div class="x2">x<sub>2</sub>=</div>
                    <span class="underline-section">
                        <span>${-1*b}-</span>
                            <span>${(Math.sqrt(diskriminan))}</span>
                        </span>
                    </span>
                </div>
            <div class="denominator">${2*a}</div>
        </div>
    </div>`;

jawaban += `
    <div class="left-container">
        <div class="formula">
            <div class="numerator">
                <div class="x2">x<sub>2</sub>=</div>
                    <span class="underline-section">
                        <span>${-1*b-Math.sqrt(diskriminan)}</span>
                    </span>
                </span>
            </div>
        <div class="denominator">${2*a}</div>
    </div>
</div>`;
            
                       
jawaban += `
    <div class="left-container">
    <div class="formula">
    <div class="x2">x<sub>2</sub>=${x2}
    </div>
    </div>
    </div>`;


    if ( a===0){
        document.getElementById('jawaban').innerHTML ="Nilai input a tidak boleh 0";
        } else if( a>=0){
        document.getElementById('jawaban').innerHTML ="Hasil perhitungan dari "+ jawaban;
        }
   
        if (diskriminan < 0) {
            document.getElementById('jawaban').innerHTML = "Persamaan tidak memiliki akar real";
            
           
        }
            
            console.log(diskriminan)
            console.log(x1)
            console.log(x2)
            console.log(b)
            console.log(bx)
            console.log(c)
            console.log(nol)
            console.log(jawaban)
}

         

