{
    let canvas = document.getElementById('canvas_02_04')
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
    document.getElementById('button_02_04_01').onclick = () => {
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

    // Função para realizar a Reflexão X do Quadrado no Canvas.
    document.getElementById('button_02_04_02').onclick = () => {
        // 2^5 * 2 = 32 * 2 = 64
        figureA_Y += 64
        figureB_Y += 64
        figureC_Y += 64
        figureD_Y += 64

        canvasContext.clearRect(0, 0, 768, 384)

        canvasContext.beginPath()

        canvasContext.moveTo(figureA_X, figureA_Y)

        canvasContext.lineTo(figureB_X, figureB_Y)
        canvasContext.lineTo(figureD_X, figureD_Y)
        canvasContext.lineTo(figureC_X, figureC_Y)
        canvasContext.lineTo(figureA_X, figureA_Y)

        canvasContext.stroke()

        canvasContext.fillText(`(${figureA_X} , -${figureA_Y})`, figureA_X, figureA_Y - 12)
        canvasContext.fillText(`(${figureB_X} , -${figureB_Y})`, figureB_X, figureB_Y + 12)
        canvasContext.fillText(`(${figureC_X} , -${figureC_Y})`, figureC_X, figureC_Y - 12)
        canvasContext.fillText(`(${figureD_X} , -${figureD_Y})`, figureD_X, figureD_Y + 12)
    }

    // Função para realizar a Reflexão Y do Quadrado no Canvas.
    document.getElementById('button_02_04_03').onclick = () => {
        figureA_X -= 64
        figureB_X -= 64
        figureC_X -= 64
        figureD_X -= 64

        canvasContext.clearRect(0, 0, 768, 384)

        canvasContext.beginPath()

        canvasContext.moveTo(figureA_X, figureA_Y)

        canvasContext.lineTo(figureB_X, figureB_Y)
        canvasContext.lineTo(figureD_X, figureD_Y)
        canvasContext.lineTo(figureC_X, figureC_Y)
        canvasContext.lineTo(figureA_X, figureA_Y)

        canvasContext.stroke()

        canvasContext.fillText(`(-${figureA_X} , ${figureA_Y})`, figureA_X, figureA_Y - 12)
        canvasContext.fillText(`(-${figureB_X} , ${figureB_Y})`, figureB_X, figureB_Y + 12)
        canvasContext.fillText(`(-${figureC_X} , ${figureC_Y})`, figureC_X, figureC_Y - 12)
        canvasContext.fillText(`(-${figureD_X} , ${figureD_Y})`, figureD_X, figureD_Y + 12)
    }

    // Função para realizar a Reflexão X e Y do Quadrado no Canvas.
    document.getElementById('button_02_04_04').onclick = () => {
        figureA_X -= 64
        figureA_Y += 64
        figureB_X -= 64
        figureB_Y += 64
        figureC_X -= 64
        figureC_Y += 64
        figureD_X -= 64
        figureD_Y += 64

        canvasContext.clearRect(0, 0, 768, 384)

        canvasContext.beginPath()

        canvasContext.moveTo(figureA_X, figureA_Y)

        canvasContext.lineTo(figureB_X, figureB_Y)
        canvasContext.lineTo(figureD_X, figureD_Y)
        canvasContext.lineTo(figureC_X, figureC_Y)
        canvasContext.lineTo(figureA_X, figureA_Y)

        canvasContext.stroke()

        canvasContext.fillText(`(-${figureA_X} , -${figureA_Y})`, figureA_X, figureA_Y - 12)
        canvasContext.fillText(`(-${figureB_X} , -${figureB_Y})`, figureB_X, figureB_Y + 12)
        canvasContext.fillText(`(-${figureC_X} , -${figureC_Y})`, figureC_X, figureC_Y - 12)
        canvasContext.fillText(`(-${figureD_X} , -${figureD_Y})`, figureD_X, figureD_Y + 12)
    }

    // Função para limpar o Canvas
    // e reposicionar o Quadrado no centro do Canvas.
    document.getElementById('button_02_04_05').onclick = () => {
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

    // Função para detectar se o Mouse está dentro do Canvas.
    canvas.onmouseenter = () => {
        // Função para obter as coordenadas do Mouse
        // e atualizar o Header que contém a posição do Mouse.
        canvas.onmousemove = (mouseEvent) => {
            let client_X = (mouseEvent.clientX - canvas.getBoundingClientRect().left).toFixed(0)
            let client_Y = (mouseEvent.clientY - canvas.getBoundingClientRect().top).toFixed(0)

            document.getElementById('h4_02_04').innerText = `(${client_X} , ${client_Y})`
        }
    }

    // Função para detectar se o Mouse está fora do Canvas
    // e atualizar o Header que contém a posição do Mouse.
    canvas.onmouseleave = () => {
        document.getElementById('h4_02_04').innerText = '(0 , 0)'
    }
}
