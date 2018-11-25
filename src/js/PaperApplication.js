
import paper from 'paper';

export default class PaperApplication {
    constructor() {
        this.version = '1'
        this.blocks = [];
        this.pointLights = [];
        this.init();
    }

    init() {
        console.log('PaperApplication::init');

        let w = window.innerWidth;
        let h = window.innerHeight;

        const canvas = document.createElement('canvas');
        canvas.id = 'paper-canvas';
        document.body.appendChild(canvas);

		paper.setup(canvas);

        var point1 = new paper.Point(0, 0);
        var point2 = new paper.Point(w, 0);
        var point3 = new paper.Point(w, h);
        var point4 = new paper.Point(0, h);

        var path1 = new paper.Path(point1, point3);
        var path2 = new paper.Path(point2, point4);

        path1.strokeColor = 'black';
        path2.strokeColor = 'black';
    }
}
