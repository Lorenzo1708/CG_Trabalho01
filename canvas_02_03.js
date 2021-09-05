{
    let canvas = document.getElementById('canvas_02_03')
    let canvasContext = canvas.getContext('2D'.toLowerCase())

    canvasContext.lineWidth = 2
    canvasContext.textAlign = 'CENTER'.toLowerCase()

    // Center: (384 , 192)
    // A: (384 - 2^5 , 192 - 2^5) = (384 - 32 , 192 - 32) = (352 , 160) 
    // B: (384 - 2^5 , 192 + 2^5) = (384 - 32 , 192 + 32) = (352 , 224)
    // C: (384 + 2^5 , 192 - 2^5) = (384 + 32 , 192 - 32) = (416 , 160)
    // D: (384 + 2^5 , 192 + 2^5) = (384 + 32 , 192 + 32) = (416 , 224)

    let figureA_X = 352
    let figureA_Y = 160
    let figureB_X = 352
    let figureB_Y = 224
    let figureC_X = 416
    let figureC_Y = 160
    let figureD_X = 416
    let figureD_Y = 224

    // Função para traçar um Quadrado no centro do Canvas.
    document.getElementById('button_02_03_01').onclick = () => {
        canvasContext.beginPath()

        canvasContext.moveTo(figureA_X, figureA_Y)

        canvasContext.lineTo(figureB_X, figureB_Y)
        canvasContext.lineTo(figureD_X, figureD_Y)
        canvasContext.lineTo(figureC_X, figureC_Y)
        canvasContext.lineTo(figureA_X, figureA_Y)

        canvasContext.stroke()

        canvasContext.fillText(`(${figureA_X} , ${figureA_Y})`, figureA_X, figureA_Y - 12)
        canvasContext.fillText(`(${figureB_X} , ${figureB_Y})`, figureB_X, figureB_Y + 12)
        canvasContext.fillText(`(${figureC_X} , ${figureC_Y})`, figureC_X, figureC_Y - 12)
        canvasContext.fillText(`(${figureD_X} , ${figureD_Y})`, figureD_X, figureD_Y + 12)
    }

    // Função para realizar a Rotação do Quadrado no Canvas.
    document.getElementById('button_02_03_02').onclick = () => {
        let factor = document.getElementById('button_02_03_04').value * Math.PI / 180

        let newFigureA_X = figureA_X * Math.cos(factor) - figureA_Y * Math.sin(factor)
        let newFigureA_Y = figureA_X * Math.sin(factor) + figureA_Y * Math.cos(factor)
        let newFigureB_X = figureB_X * Math.cos(factor) - figureB_Y * Math.sin(factor)
        let newFigureB_Y = figureB_X * Math.sin(factor) + figureB_Y * Math.cos(factor)
        let newFigureC_X = figureC_X * Math.cos(factor) - figureC_Y * Math.sin(factor)
        let newFigureC_Y = figureC_X * Math.sin(factor) + figureC_Y * Math.cos(factor)
        let newFigureD_X = figureD_X * Math.cos(factor) - figureD_Y * Math.sin(factor)
        let newFigureD_Y = figureD_X * Math.sin(factor) + figureD_Y * Math.cos(factor)

        canvasContext.clearRect(0, 0, 768, 384)

        canvasContext.beginPath()

        canvasContext.moveTo(newFigureA_X, newFigureA_Y)

        canvasContext.lineTo(newFigureB_X, newFigureB_Y)
        canvasContext.lineTo(newFigureD_X, newFigureD_Y)
        canvasContext.lineTo(newFigureC_X, newFigureC_Y)
        canvasContext.lineTo(newFigureA_X, newFigureA_Y)

        canvasContext.stroke()

        canvasContext.fillText(`(${newFigureA_X.toFixed(0)} , ${newFigureA_Y.toFixed(0)})`, newFigureA_X, newFigureA_Y - 12)
        canvasContext.fillText(`(${newFigureB_X.toFixed(0)} , ${newFigureB_Y.toFixed(0)})`, newFigureB_X, newFigureB_Y + 12)
        canvasContext.fillText(`(${newFigureC_X.toFixed(0)} , ${newFigureC_Y.toFixed(0)})`, newFigureC_X, newFigureC_Y - 12)
        canvasContext.fillText(`(${newFigureD_X.toFixed(0)} , ${newFigureD_Y.toFixed(0)})`, newFigureD_X, newFigureD_Y + 12)
    }

    // Função para limpar o Canvas
    // e reposicionar o Quadrado no centro do Canvas.
    document.getElementById('button_02_03_03').onclick = () => {
        canvasContext.clearRect(0, 0, 768, 384)

        figureA_X = 352
        figureA_Y = 160
        figureB_X = 352
        figureB_Y = 224
        figureC_X = 416
        figureC_Y = 160
        figureD_X = 416
        figureD_Y = 224
    }

    document.getElementById('button_02_03_04').onchange = () => {
        document.getElementById('h5_02_03_01').innerText = `${document.getElementById('button_02_03_04').value}°`
    }

    // Função para detectar se o Mouse está dentro do Canvas.
    canvas.onmouseenter = () => {
        // Função para obter as coordenadas do Mouse
        // e atualizar o Header que contém a posição do Mouse.
        canvas.onmousemove = (mouseEvent) => {
            let client_X = (mouseEvent.clientX - canvas.getBoundingClientRect().left).toFixed(0)
            let client_Y = (mouseEvent.clientY - canvas.getBoundingClientRect().top).toFixed(0)

            document.getElementById('h4_02_03').innerText = `(${client_X} , ${client_Y})`
        }
    }

    // Função para detectar se o Mouse está fora do Canvas
    // e atualizar o Header que contém a posição do Mouse.
    canvas.onmouseleave = () => {
        document.getElementById('h4_02_03').innerText = '(0 , 0)'
    }
}
