function main(ticketInfoArr, sortBy){
   let schedule = [];
   class Ticket {
      constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
      }
   }

   ticketInfoArr.forEach(city => {
      let [destination, price, status] = city.split("|");
      schedule.push(new Ticket(destination, price, status))
   })

   if (sortBy == "price") {
      // deal with the numbers
      schedule.sort((a, b) => a.price.localeCompare(b.price));
   } else if (sortBy == "destination") {
      schedule.sort((a, b) => a.destination.localeCompare(b.destination));
   } else if (sortBy == "status") {
      schedule.sort((a, b) => a.status.localeCompare(b.status));
   } else {
      return "Error"
   }

   console.log(schedule);
} 

main(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');

// [ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' },
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } ]

// main(['Philadelphia|94.20|available',
//  'New York City|95.99|available',
//  'New York City|95.99|sold',
//  'Boston|126.20|departed'],
// 'status');

// [ Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' } ]