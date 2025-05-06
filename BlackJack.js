//BlackJack Game

const palos = ['♠', '♥', '♦', '♣'];
const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function crearBaraja() {
  const baraja = [];
  for (let palo of palos) {
    for (let valor of valores) {
      baraja.push({ valor, palo });
    }
  }
  return baraja;
 }
  // Baraja de cartas

function mezclarBaraja(baraja) {
    for (let i = baraja.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
 }
  //Suffle de la baraja  

function repartirCarta(baraja, jugadorId) {
    const carta = baraja.pop();
    const divJugador = document.getElementById(jugadorId);
    const cartaEl = document.createElement('span');
    cartaEl.className = 'carta';
    cartaEl.innerText = `${carta.valor}${carta.palo}`;
    divJugador.appendChild(cartaEl);
    return carta;
  }
  //Reparte una carta a un jugador y la muestra en el div correspondiente

  let baraja = crearBaraja();
  mezclarBaraja(baraja);
  
  let manos = {
    dealer: [],
    p0: [], p1: [], p2: [], p3: [], p4: [], p5: [], p6: []
  };
  
  // Repartir 2 cartas a cada jugador
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j <= 6; j++) {
      const carta = repartirCarta(baraja, `p${j}`);
      manos[`p${j}`].push(carta);
    }
    const cartaDealer = repartirCarta(baraja, 'dealer');
    manos.dealer.push(cartaDealer);
  }
  
 //Por ahora el codigo le da dos cartas al azar a los jugadores pero no al dealer
 //Lo sigueinte es permitir que el dealer saque cartas y que los jugadores puedan pedir cartas o plantarse