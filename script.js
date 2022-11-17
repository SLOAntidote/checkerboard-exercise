function square(UI_body, width, height, color){
    const square = document.createElement('div');
    square.style.width = width;
    square.style.height = height;
    square.style.margin = "2px 2px 2px 2px";
    square.style.backgroundColor = color;
    UI_body.append(square);
}

function UI_box(UI_box_number){
    UI_body = document.createElement("div");
    body[0].append(UI_body);
    UI_body.setAttribute("id", UI_box_number);
    UI_body.style.display = "flex";
    return UI_body;
}

const body = document.getElementsByTagName("body");

let color = '';
let color_one = "red";
let color_two = "black";

let square_width = "100px";
let square_height = "100px";

let rows = 8;
let cols = 8;

main();

function main(){
    for(let i = 0; i < rows; i ++){
        let UI_body = UI_box(String(i));
        for(let j = 0; j < cols; j ++){
            if(j % 2 == 0 && i % 2 == 0){
                color = color_one;
            } else {
                color = color_two;
                if(i % 2 != 0 && j % 2 != 0){
                    color = color_one;
                }
            }
            square(UI_body, square_width, square_height, color);

        }
    }
}
