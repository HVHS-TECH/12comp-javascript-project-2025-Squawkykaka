function spawnButton(text, x, y, func) {
    button = new Sprite(x, y, textWidth(text)+100, 50, "k")
    button.text = text

    buttonGroup.add(button)
    
    button.update = () => {
        if(button.mouse.pressing()) {func();}
        else button.color = "red"
    }
}