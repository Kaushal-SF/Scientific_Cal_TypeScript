"use strict";
let all_btns = document.querySelectorAll("button");
let final_ans = document.getElementById("screen_result");
let display = document.getElementById("screen");
let temp;
let curr_dis_val;
let memory;
for (let items of all_btns) {
    items.addEventListener("click", (e) => {
        // target value as HTMLInputElement
        let btn_val = e.target.innerText;
        switch (btn_val) {
            case "MC":
                memory = "";
                break;
            case "MS":
                memory = display.innerText;
                break;
            case "MR":
                display.innerText += memory;
                break;
            case "M+":
                curr_dis_val = parseFloat(display.innerText);
                memory += curr_dis_val;
                display.innerText = memory;
                break;
            case "M-":
                let mem_minus;
                curr_dis_val = parseFloat(display.innerText);
                mem_minus = parseFloat(memory);
                mem_minus -= curr_dis_val;
                display.innerText = memory;
                break;
            // from radian to deg
            case "DEG":
                let radian = display.innerText;
                temp = (parseFloat(radian) * 180) / Math.PI;
                final_ans.innerText = temp.toString();
                console.log(final_ans.innerText);
                break;
            // to clear screen
            case "C":
                display.innerText = "";
                final_ans.innerText = "";
                break;
            // backspace
            case "←":
                if (display.innerText)
                    display.innerText = display.innerText.slice(0, -1);
                break;
            // to evaluate the result:
            case "=":
                try {
                    temp = display.innerText;
                    final_ans.innerText = eval(temp);
                }
                catch (_a) {
                    display.innerText = "Invalid Input";
                }
                break;
            // fixed
            case "F-E":
                let fix = display.innerText;
                if (fix.length > 20) {
                    final_ans.innerText = final_ans.innerText.substring(0, 12);
                }
                break;
            case "2nd":
                final_ans.innerText = "Invalid";
                break;
            case "sin":
                final_ans.innerText = Math.sin(parseFloat(display.innerText)).toFixed(8);
                break;
            case "cos":
                final_ans.innerText = Math.cos(parseFloat(display.innerText)).toFixed(8);
                break;
            case "tan":
                final_ans.innerText = Math.tan(parseFloat(display.innerText)).toFixed(8);
                break;
            case "cot":
                final_ans.innerText = (1 / Math.tan(parseFloat(display.innerText))).toFixed(8);
                break;
            case "cosec":
                final_ans.innerText = (1 / Math.sin(parseFloat(display.innerText))).toFixed(8);
                break;
            case "sec":
                final_ans.innerText = (1 / Math.cos(parseFloat(display.innerText))).toFixed(8);
                break;
            case "abs":
                final_ans.innerText = Math.abs(parseFloat(display.innerText)).toString();
                break;
            case "round":
                final_ans.innerText = Math.round(parseFloat(display.innerText)).toString();
                break;
            case "floor":
                final_ans.innerText = Math.floor(parseFloat(display.innerText)).toString();
                break;
            case "ceil":
                final_ans.innerText = Math.ceil(parseFloat(display.innerText)).toString();
                break;
            case "x":
                btn_val = "*";
                display.innerText += btn_val;
                break;
            case "÷":
                btn_val = "/";
                display.innerText += btn_val;
                break;
            case "π":
                display.innerText += Math.PI.toFixed(10);
                eval(display.innerText);
                break;
            case "e":
                display.innerText += Math.E.toFixed(10);
                eval(display.innerText);
                break;
            // num^2
            case "𝑥^2":
                temp = (parseFloat(display.innerText) * parseFloat(display.innerText));
                final_ans.innerText = eval(temp.toString());
                break;
            case "1/𝑥":
                temp = (1 / parseFloat(display.innerText));
                final_ans.innerText = eval(temp.toString()).toFixed(2);
                break;
            case "|𝑥|":
                final_ans.innerText = Math.abs(parseFloat(display.innerText)).toString();
                break;
            case "exp":
                final_ans.innerText = Math.exp(parseFloat(display.innerText)).toFixed(8);
                break;
            case "mod":
                btn_val = "%";
                display.innerText += btn_val;
                break;
            // square root
            case "2√𝑥":
                temp = Math.sqrt(parseFloat(display.innerText));
                final_ans.innerText = temp.toString();
                break;
            // factorial of number
            case "n!":
                let num = parseFloat(display.innerText);
                function fact(val) {
                    if (val < 0)
                        return -1;
                    else if (val == 0)
                        return 1;
                    else {
                        return val * fact(val - 1);
                    }
                }
                let rslt = fact(num);
                final_ans.innerText = rslt.toString();
                break;
            // 10^num
            case "10𝑥":
                display.innerText = (Math.pow(10, eval(display.innerText))).toString();
                break;
            case "log":
                temp = Math.log10(parseFloat(display.innerText)).toFixed(8);
                final_ans.innerText = temp;
                break;
            case "ln":
                temp = Math.log(parseFloat(display.innerText)).toFixed(8);
                final_ans.innerText = temp;
                break;
            // num^num
            case "𝑥^y":
                btn_val = "**";
                display.innerText += btn_val;
                break;
            case "+/-":
                display.innerText = (parseFloat(display.innerText) * (-1)).toString();
                break;
            default:
                display.innerText += btn_val;
        }
        ;
    });
}
;
