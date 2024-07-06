function customerNew() {
    let c = {
        "addressList": [],
        "tel": "",
    }

    customerList.push(c);
    customer=customerList.at(-1);
    customerId=customerList.length;   
}

function customerAdd(name,street,city,tel) {
    customerNew();
    customerAddAddress(name, street, city);
    customerSetTel(tel);
}

function customerUse(id) {
    customerSet(id);
}

function customerSet(id) {
    customer=customerList[id];
    customerId=id;
}

function customerRemove(id) {
    customerList.splice(id,1);
    if (id == customerId) {
        customerId=null;
        customer=null;
    } else
    if (id < customerId)  {
        customerSet(customerId-1);
    }
}

function customerAddAddress(name, street, city) {
    if (name != null && street != null && city != null) {
        customer["addressList"].push(newAddress(name, street, city));
    }
}

function customerSetTel(tel) {
    if (tel != null) {
        customer["tel"] = tel;
    }
}

