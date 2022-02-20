class User {
  name;
  address;
  phone;
  constructor(userName, userAddress, userPhone) {
    this.name = userName;
    this.address = userAddress;
    this.phone = userPhone;
  }
};
class Active extends User {
  device;
  howLong;
  constructor(name, address, phone, usingDevice, hour) {
    super(name, address, phone);
    this.device = usingDevice;
    this.howLong = hour;
  }
  isActive() {
    console.log(this.name, 'is active now!');
  }
};
class Offline extends User {
  lastActive;
  constructor(name, address, phone, time) {
    super(name, address, phone);
    this.lastActive = time;
  }
  isOffline(reason) {
    console.log(this.name, 'is offline due to: ', reason);
  }
}
const wahid = new Active('Wahid', 'Bahaddarhat', '01887757261', 'nokia e71', 1.5);
const moshu = new Offline('Moshu', 'Dewanhat', '01631572446', '12:30');
console.log(wahid);
console.log(moshu);
wahid.isActive();
moshu.isOffline('home work');