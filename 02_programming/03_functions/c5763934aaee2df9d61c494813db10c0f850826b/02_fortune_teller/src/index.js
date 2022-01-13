function tellFortune(job, city ,name, number) {
  console.log(`You will be ${job} in ${city}, and married to ${name} in ${number} years.`);
}
tellFortune("webdevelopper","Lille", "Frieda", 2);
// Do not remove last lines, it is for tests
module.exports = tellFortune;