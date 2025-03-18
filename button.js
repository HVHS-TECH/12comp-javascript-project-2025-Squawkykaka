function spawnButton(text, x, y, func) {
    button = new Sprite(x, y, textWidth(text)+100, 50, "k")
    button.text = text
    button.textSize = 20

    console.log(func);
    
    button.update = () => {
        if(button.mouse.pressing()) func();
    }

    buttonGroup.add(button)
}