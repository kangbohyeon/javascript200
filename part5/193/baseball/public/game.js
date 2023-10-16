class BaseballGame {
    constructor(id) {
        this.id = id;
        this.resultContainerE1 = document.querySelector(".result-container");
        this.guessE1 = document.getElementById("guess");
    }

    async initParams() {
        try {
            const guessLabel = document.getElementById("guess-label");
            const res = await fetch(`api/game${this.id}`);
            const v = await res.json();
            this.digit = v.digit;
            this.history = v.history;
            this.done = v.done;
            this.history.forEach(({ guess, result }) =>
                this.rednerResults(guess, result)
            );
            if (this.done) {
                this.makeEnd();
            }
            guessLabel.innerHtml += `(${this.digit}자리)`;
            this.bindEvent();
            return this;
        } catch (err) {
            alert(err);
        }
    }

    bindEvent() {
        this.guessE1.addEventListener("keypress", async (e) => {
            const guess = e.target.value;
            if (e.keyCode === 13) {
                const res = await this.askResult(guess);
                this.rednerResults(guess, res.result);
                if (res.done) {
                    res.done = this.done;
                    this.makeEnd();
                }
                this.guessE1.value = "";
            }
        });
    }

    async askResult(guess) {
        const headers = new Headers({
            "Content-Type": "application/json",
        });
        const res = await fetch(`api/game/${this.id}/guess`, {
            method: "POST",
            body: JSON.stringify({ guess }),
            headers,
        });

        if (res.status === 400) {
            const { message } = await res.json();
            alert(message);
            throw new Error(message);
        } else {
            return res.json();
        }
    }
    rednerResults(guess, result) {
        this.resultContainerE1.insertAdjacentHTML(
            "beforeend",
            `li class="list-group-item">
            <span class="guess">${guess}</span>
            <span class="badge result">${result}</span>
            </li>
            `
        );
    }
    makeEnd() {
        this.guessE1.disabled = true;
        this.guessE1.placeholder = "정답을 맞추었습니다.";
    }
}
