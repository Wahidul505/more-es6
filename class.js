class Active {
  name;
  address;
  phone;
  using = 'Instagram';
  isActive() {
    console.log(this.name, 'is active now!');
  }
  isOffline() {
    console.log(this.name, 'is offline from', this.address);
  }
  constructor(personName, personAddress, personPhone) {
    this.name = personName;
    this.address = personAddress;
    this.phone = personPhone;
  }
}

const moshu = new Active('Moshu', 'chittagong', '017734....');
console.log(moshu);
const wahid = new Active('Wahid', 'bahaddarhat', '018877....');
console.log(wahid);
console.log(wahid.name);
console.log(moshu.phone, moshu.address);
wahid.isActive();
const simra = new Active('Simra', 'Denmark', '0124....');
console.log(simra);
simra.isOffline();
