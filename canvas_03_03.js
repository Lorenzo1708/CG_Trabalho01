{
    let canvas = document.getElementById('canvas_03_03')
    let canvasContext = canvas.getContext('2D'.toLowerCase())

    canvasContext.lineWidth = 2
    canvasContext.textAlign = 'CENTER'.toLowerCase()

    let pointList_X = []
    let pointList_Y = []

    // Algoritmo de Bresenham para Circunferências.
    document.getElementById('button_03_03_01').onclick = () => {
        function plotCirclePoints() {
            canvasContext.fillRect(center_X + X, center_Y + Y, 2 ,2)
            canvasContext.fillRect(center_X - X, center_Y + Y, 2 ,2)
            canvasContext.fillRect(center_X + X, center_Y - Y, 2 ,2)
            canvasContext.fillRect(center_X - X, center_Y - Y, 2 ,2)
            canvasContext.fillRect(center_X + Y, center_Y + X, 2 ,2)
            canvasContext.fillRect(center_X - Y, center_Y + X, 2 ,2)
            canvasContext.fillRect(center_X + Y, center_Y - X, 2 ,2)
            canvasContext.fillRect(center_X - Y, center_Y - X, 2 ,2)
        }

        let X_2 = pointList_X.pop()
        let X_1 = pointList_X.pop()
        let Y_2 = pointList_Y.pop()
        let Y_1 = pointList_Y.pop()

        let center_X = +X_1
        let center_Y = +Y_1

        let R = Math.sqrt(Math.pow((X_2 - X_1), 2) + Math.pow((Y_2 - Y_1), 2))

        let X = 0
        let Y = R
        let P = 3 - 2 * R

        while (X < Y) {
            if (P < 0) {
                P += 4 * X + 6
            } else {
                P += 4 * (X - Y) + 10

                Y--
            }

            X++

            plotCirclePoints()
        }
    }

    // Função para limpar o Canvas
    // e esvaziar a lista de Pontos.
    document.getElementById('button_03_03_02').onclick = () => {
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

            document.getElementById('h4_03_03').innerText = `(${client_X} , ${client_Y})`
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
        document.getElementById('h4_03_03').innerText = '(0 , 0)'
    }
}
