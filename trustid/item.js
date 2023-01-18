class Item {
    constructor(type, key, code, timestamp, last_time, ascii, owner, checked) {
        this.type = type;
        this.up = 1;
        if (type === "keydown")
            this.up = 0;
        this.key = key;
        this.ascii = ascii;
        this.code = code;
        this.millisecondDiff = timestamp;
        this.totalTimeMilliseconds = last_time;
        this.own = owner;
        this.checked = checked;
    }

    getEvent() {
        return this.event;
    }

    getKey() {
        return this.key;
    }

    getType() {
        return this.type;
    }

    getCode() {
        return this.code;
    }

    getTimestamp() {
        return this.millisecondDiff;
    }

    getTime() {
        return this.totalTimeMilliseconds;
    }

    getAsciiKey() {
        return this.ascii;
    }
}