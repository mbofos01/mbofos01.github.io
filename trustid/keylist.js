class KeyList {
    constructor() {
        this.list = [];
        this.ts = 0;
        this.started = false;
        this.total_time = 0;
        this.decoder = new Decoder();
    }

    addEvent(event) {
        let timestamp = 0;
        if (this.started === false) {
            timestamp = 0;
            this.started = true;
            this.ts = new Date();
        } else {
            timestamp = new Date() - this.ts;
            this.ts = new Date();
            this.total_time += timestamp;
        }
        let ascii = this.decoder.decode(event.code, event.key);
        this.list.push(new Item(event.type, event.key, event.code, timestamp, this.total_time, ascii, 1, false));
    }

    addData(data) {
        this.list.push(new Item(data.type, data.key, data.code, data.millisecondDiff, data.totalTimeMilliseconds, data.ascii, 0, data.checked));
    }

    printList() {
        console.table(this.list);
    }

    getList() {
        return this.list;
    }
}