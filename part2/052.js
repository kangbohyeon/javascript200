class Chart {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line');
    }
}

class BarCahrt extends Chart {
    constructor(width, heigth) {
        super(width, heigth)
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} x ${this.height} barChart`);
    }
}

const barchart1 = new BarCahrt(100, 100);
barchart1.draw();
