import Column from "./Column.js";

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach(column => {
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root);
        });
    }

    static columns() {
        return [
            {
                id: 1,
                title: "CẦN LÀM"
            },
            {
                id: 2,
                title: "ĐANG LÀM"
            },
            {
                id: 3,
                title: "HOÀN THÀNH"
            }
        ];
    }
}