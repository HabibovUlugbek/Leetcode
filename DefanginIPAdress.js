var defangIPaddr = function(address) {
    return address.split(".").join('[.]')
};
console.log(defangIPaddr("1.5.6"))