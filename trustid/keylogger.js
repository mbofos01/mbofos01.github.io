class KeyLogger {
	constructor(element) {
		this.agent = element;
		this.loglist = new KeyList();
		this.ups = new KeyList();
		this.downs = new KeyList();

		this.agent.addEventListener('keydown', (event) => {
			this.loglist.addEvent(event);
			this.downs.addEvent(event);
		});
		this.agent.addEventListener('keyup', (event) => {
			this.loglist.addEvent(event);
			this.ups.addEvent(event);
		});
	}

	setList(FILE_NAME) {
		var xhr = new XMLHttpRequest();
		this.loglist = new KeyList();
		var li = [];
		xhr.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(this.responseText);
				for (let i = 0; i < data.length; i++) {
					li.push(data[i]);
				}
			}
		}
		xhr.open("GET", FILE_NAME, false);
		xhr.send();
		for (let i = 0; i < li.length; i++) {
			this.loglist.addData(li[i]);
		}

	}

	printList() {
		this.loglist.printList();
	}

	getList() {
		return this.loglist;
	}

	printKeyUp() {
		this.ups.printList();
	}

	printKeyDown() {
		this.downs.printList();
	}

	getList() {
		return this.loglist.getList();
	}


	generateTrainset(noise, owner) {
		let table = this.getList();
		let set = [];
		let res = [];
		let producer;
		if (noise === true) {
			producer = new NoiseProduction();
		}
		for (let i = 0; i < table.length; i++) {
			if (noise === true && i < 0.4 * table.length) {
				producer.reCreate();
				let noisy_val = producer.getValues();
				let noisy_out = producer.getOutput();
				set.push(noisy_val);
				res.push(noisy_out);
			}
			if (table[i].up === 0 && table[i].checked === false && table[i].ascii !== -1) {
				table[i].checked = true;
				let char = table[i].key;
				let ascii = table[i].ascii;
				let delay = 0;
				let downs = 1;
				for (let j = i + 1; j < table.length; j++) {
					delay += table[j].millisecondDiff;
					if (table[j].checked === false && table[j].key === char) {
						if (table[j].up === 1) {
							table[j].checked = true;
							break;
						} else {
							downs++;
							table[j].checked = true;
						}
					}
				}
				set.push([ascii, delay, downs]);
				if (owner === true)
					res.push([1]);
				else
					res.push([0]);
			}
		}

		return [set, res];
	}

	createBlob(element) {
		var data = this.getList();
		var json = JSON.stringify(data);
		var blob = new Blob([json], {
			type: 'application/json'
		});
		var url = URL.createObjectURL(blob);
		element.href = url;
	}
	// trainining_input.createBlob('download-link');
}

class dataRow {
	constructor(char, ascii, delay, downs) {
		this.char = char;
		this.ascii = ascii;
		this.delay = delay;
		this.downs = downs;
	}
}