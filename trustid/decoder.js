class Decoder {
    decode(code, key) {
        const OFFSET = 500;
        let undef;
        if (key.length === 1) {
            return key.charCodeAt(0);
        }
        // } else if (code === "ShiftLeft") {
        //     return OFFSET + 1;
        // } else if (code === "ShiftRight") {
        //     return OFFSET + 2;
        // } else if (code === "ControlLeft") {
        //     return OFFSET + 3;
        // } else if (code === "ControlRight") {
        //     return OFFSET + 4;
        // } else if (code === "AltLeft") {
        //     return OFFSET + 5;
        // } else if (code === "AltRight") {
        //     return OFFSET + 6;
        // } else if (code === "MetaLeft") {
        //     return OFFSET + 7;
        // } else if (code === "MetaRight") {
        //     return OFFSET + 8;
        // } else if (code === "CapsLock") {
        //     return OFFSET + 9;
        // } else if (code === "Tab") {
        //     return OFFSET + 10;
        // } else if (code === "Backspace") {
        //     return OFFSET + 11;
        // } else if (code === "Delete") {
        //     return OFFSET + 12;
        // } else if (code === "Insert") {
        //     return OFFSET + 13;
        // } else if (code === "Home") {
        //     return OFFSET + 14;
        // } else if (code === "End") {
        //     return OFFSET + 15;
        // } else if (code === "PageUp") {
        //     return OFFSET + 16;
        // } else if (code === "PageDown") {
        //     return OFFSET + 17;
        // } else if (code === "NumpadAdd") {
        //     return OFFSET + 18;
        // } else if (code === "NumpadSubtract") {
        //     return OFFSET + 19;
        // } else if (code === "NumpadMultiply") {
        //     return OFFSET + 20;
        // } else if (code === "NumpadDivide") {
        //     return OFFSET + 21;
        // } else if (code === "NumLock") {
        //     return OFFSET + 22;
        // } else if (code === "Enter") {
        //     return OFFSET + 23;
        // } else if (code === "NumpadEnter") {
        //     return OFFSET + 24;
        // } else if (code === "ContextMenu") {
        //     return OFFSET + 25;
        // } else if (code === "F1") {
        //     return OFFSET + 26;
        // } else if (code === "F2") {
        //     return OFFSET + 27;
        // } else if (code === "F3") {
        //     return OFFSET + 28;
        // } else if (code === "F4") {
        //     return OFFSET + 29;
        // } else if (code === "F5") {
        //     return OFFSET + 30;
        // } else if (code === "F6") {
        //     return OFFSET + 31;
        // } else if (code === "F7") {
        //     return OFFSET + 32;
        // } else if (code === "F8") {
        //     return OFFSET + 33;
        // } else if (code === "F9") {
        //     return OFFSET + 34;
        // } else if (code === "F10") {
        //     return OFFSET + 35;
        // } else if (code === "F11") {
        //     return OFFSET + 36;
        // } else if (code === "F12") {
        //     return OFFSET + 37;
        // } else if (code === "Escape") {
        //     return OFFSET + 38;
        // } else if (code === "ArrowUp") {
        //     return OFFSET + 39;
        // } else if (code === "ArrowRight") {
        //     return OFFSET + 40;
        // } else if (code === "ArrowLeft") {
        //     return OFFSET + 41;
        // } else if (code === "ArrowDown") {
        //     return OFFSET + 42;
        // } 
        else {
            return -1;
        }
    }
}