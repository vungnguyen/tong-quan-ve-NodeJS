const checkLicensePlateInHanoi = (licensePlate) => {
    const arr= ['29','30','31','32','33','40'];
    for (const value of arr) {
        if (licensePlate.includes(value)){
            return true
        }
    }
    return false
}
let listLicensePlates = ['89L1-12345','20H2-456789','29B1-45565','30L1-444334'];
let listLicensePlateInHanoi = [];
for (const a of listLicensePlates) {
    if (checkLicensePlateInHanoi(a)){
        listLicensePlateInHanoi.push(a)
    }
}
console.log(`các biển số thuộc hà nội : ${listLicensePlateInHanoi}`)