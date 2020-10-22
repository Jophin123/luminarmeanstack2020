class Bank {
    static getaccdetails() {
        let data = {
            jo: { username: "jo", password: "abc123", accno: "1234", balance: 1000 },
            amal: { username: "amal", password: "amal123", accno: "135", balance: 5000 },
            sebu: { username: "sebu", password: "sebu123", accno: "1357", balance: 6000 },
            raju: { username: "raju", password: "raju123", accno: "1347", balance: 7000 }

        }
        return data;
    }
    static login() {
        let usname = document.querySelector("#uname").value;
        let pwdd = document.querySelector("#pwd").value;
        let data = Bank.getaccdetails()
        if (usname in data) {
            let password = data[usname]["password"];
            if (pwdd == password) {
                swal("Login Success", "you have entered valid data!", "success");
                setTimeout(() => window.location.href = "userhome.html", 5000)
            } else {
                swal("Login failed", " enter valid data!", "error");
            }

        }
        else {
            alert("not exist")
        }

    }
    static deposit() {
        let unname = document.querySelector("#uname").value;
        // alert(unname);
        let amt = Number(document.querySelector("#amt").value);


        let data = Bank.getaccdetails()
        let btag = document.querySelector("#bal");
        if (unname in data) {
            // alert(unname)
            data[unname]["balance"] += amt
            let bal = data[unname]["balance"]
            btag.textContent = "available balance is" + bal
        } else {
            alert("invalid details")
        }
    }
    static withdraw() {
        let duname = document.querySelector("#wuname").value;
        let amount = document.querySelector("#wamt").value;
        let btag = document.querySelector("#bal");
        let data = Bank.getaccdetails();

        if (duname in data) {
            let avlbal = data[duname]["balance"]
            if (amount > avlbal) {
                alert("insuffient balance");
            } else {
                data[duname]["balance"] -= amount;
                let bal = data[duname]["balance"]
                btag.textContent = "available balance is" + bal
            }
        } else {
            alert("invalid");
        }
    }
}


