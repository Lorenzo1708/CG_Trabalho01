{
    let canvas = document.getElementById('canvas_03_01')
    let canvasContext = canvas.getContext('2D'.toLowerCase())

    canvasContext.lineWidth = 2
    canvasContext.textAlign = 'CENTER'.toLowerCase()

    let pointList_X = []
    let pointList_Y = []

    // Algoritmo de DDA para Retas.
    document.getElementById('button_03_01_01').onclick = () => {
        let X_2 = pointList_X.pop()
        let X_1 = pointList_X.pop()
        let Y_2 = pointList_Y.pop()
        let Y_1 = pointList_Y.pop()

        let delta_X = X_2 - X_1
        let delta_Y = Y_2 - Y_1

        let noStep = Math.abs(delta_X)

        if (Math.abs(delta_X) < Math.abs(delta_Y)) {
            noStep = Math.abs(delta_Y)
        }

        let increment_X = delta_X / noStep
        let increment_Y = delta_Y / noStep

        let X = +X_1
        let Y = +Y_1

        canvasContext.beginPath()
        
        canvasContext.moveTo(Math.round(X), Math.round(Y))

        for (let i = 0; i < noStep; i++) {
            X += increment_X
            Y += increment_Y

            canvasContext.lineTo(Math.round(X), Math.round(Y))
        }

        canvasContext.stroke()
    }

    // Função para limpar o Canvas
    // e esvaziar a lista de Pontos.
    document.getElementById('button_03_01_02').onclick = () => {
        canvasContext.clearRect(0, 0, 768, 384)

        pointList_X = []
        pointList_Y = []
    }

    // Função para detectar se o Mouse está dentro do Canvas.
    canvas.onmouseenter = () => {
        // Função para obter as coordenadas do Mouse
        // e atualizar o Header que contém a posição do Mouse.
        canvas.onmousemove = (mouseEvent) => {
            let client_X = (mouseEvent.clientX - canvas.getBoundingClientRect().left).toFixed(0)
            let client_Y = (mouseEvent.clientY - canvas.getBoundingClientRect().top).toFixed(0)

            document.getElementById('h4_03_01').innerText = `(${client_X} , ${client_Y})`
        }

        // Função para obter as coordenadas do Clique do Mouse
        // e traçar um Ponto desse Clique no Canvas.
        canvas.onclick = (mouseEvent) => {
            let point_X = (mouseEvent.clientX - canvas.getBoundingClientRect().left).toFixed(0)
            let point_Y = (mouseEvent.clientY - canvas.getBoundingClientRect().top).toFixed(0)

            pointList_X.push(point_X)
            pointList_Y.push(point_Y)

            canvasContext.fillRect(point_X, point_Y, 2, 2)

            canvasContext.fillText(`(${point_X} , ${point_Y})`, point_X, point_Y - 12)
        }
    }

    // Função para detectar se o Mouse está fora do Canvas
    // e atualizar o Header que contém a posição do Mouse.
    canvas.onmouseleave = () => {
        document.getElementById('h4_03_01').innerText = '(0 , 0)'
    }
}
