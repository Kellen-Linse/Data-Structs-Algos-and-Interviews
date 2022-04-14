ticketArray = [
  { origin: 'cityA', destination: 'cityB' },
  { origin: 'cityB', destination: 'cityC' },
  { origin: 'cityC', destination: 'cityD' },
];

function ticketPath(ticketArray) {
  let path = [];
  let firstTicket;

  for (ticket1 of ticketArray) {
    let match = false;
    for (ticket2 of ticketArray) {
      console.log(ticket1.origin, ticket2.destination)
      if (ticket1.origin === ticket2.destination) {
        match = true;
    
      }
    }
    if (!match) {
      firstTicket = ticket1;
      break;
    }
  }

  if (!firstTicket) {
    console.log('no match');
    return
  };

  let ticketObj = {};

  for (ticket of ticketArray) {
    ticketObj[ticket.origin] = ticket.destination;
  }

  let counter = 0;
  let current = firstTicket.origin;

  while (current) {
    path[counter] = current;
    current = ticketObj[current];
    counter++;
  }

  console.log(path);
}

ticketPath(ticketArray);
