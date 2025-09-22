const available = document.getElementById("available-coin");
const calls = document.querySelectorAll(".btn-call");
const copies = document.querySelectorAll(".btn-copy");
const hearts = document.querySelectorAll(".btn-heart");
const availableHeart = document.getElementById("heart-count");
const availableCopy = document.getElementById("copy-count");
const history = [];
const callHistory = document.querySelector("#history-container .call-history");
const clear = document.getElementById("clear");

for (const call of calls) {
    call.addEventListener("click", function (e) {
        e.preventDefault();


        let totalCoins = parseInt(available.innerText);

        if (totalCoins >= 20) {
            totalCoins -= 20;
            available.innerText = totalCoins;

            const section = this.closest("section");
            const service = section.querySelector("h2").innerText;
            const servicename = section.querySelector("p").innerText;
            const number = section.querySelector("h1").innerText;


            //alert msg
            alert(`Calling ${service} (${number}) ...`);

            const historyItem = document.createElement("div");
            historyItem.className = "bg-amber-200 flex justify-between p-2 mt-2";

            const itemLeft = document.createElement("div");
            itemLeft.className = "items-center";

            const Litem1 = document.createElement("h5");
            Litem1.className = "text-lg";
            Litem1.innerText = servicename;
            itemLeft.appendChild(Litem1);

            const Litem2 = document.createElement("h4");
            Litem2.innerText = number;
            itemLeft.appendChild(Litem2);

            historyItem.appendChild(itemLeft);

     

            const Ritem = document.createElement("p");
            Ritem.className = "items-center flex justify-center";
            Ritem.innerText = new Date().toLocaleTimeString();
            historyItem.appendChild(Ritem);

            callHistory.appendChild(historyItem);


            const data = {
                serviceName:servicename ,
                serviceNumber: number,
                date: new Date().toLocaleTimeString()

            }
            
            history.push(data);
 


        } else {
            alert(`Sorry! coin finished. You cant make a call anymore`);
        }
    })
}



clear.addEventListener("click", function (e) {
    e.preventDefault();
    callHistory.innerHTML = "";
})


for (const heart of hearts) {
    heart.addEventListener("click", function (e) {
        e.preventDefault();

        let totalHeart = parseInt(availableHeart.innerText);
        totalHeart += 1;
        availableHeart.innerText = totalHeart;

    })
}

for (const copy of copies) {
    copy.addEventListener("click", function (e) {
        e.preventDefault();

        let totalCopy = parseInt(availableCopy.innerText);
        totalCopy += 1;
        availableCopy.innerText = totalCopy;

    })
}