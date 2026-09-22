function renderCalendar(data) {
  document.querySelector('.sidebar h1').textContent = data.mes + ':';

  const diasLargos = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const diasCortos = ['DOM','LUN','MAR','MIÉ','JUE','VIE','SÁB'];

  const grid = document.querySelector('.calendar-grid');
  grid.innerHTML = '';

  for (let i = 0; i < 7; i++) {
    const h = document.createElement('div');
    h.className = 'header-day';
    h.innerHTML = '<span class="day-full">' + diasLargos[i] + '</span><span class="day-short">' + diasCortos[i] + '</span>';
    grid.appendChild(h);
  }

  const primerDia = new Date(data.año, data.mesIndex, 1).getDay();
  const ultimoDia = new Date(data.año, data.mesIndex + 1, 0).getDate();

  for (let i = 0; i < primerDia; i++) {
    const e = document.createElement('div');
    e.className = 'day-cell empty';
    grid.appendChild(e);
  }

  const eventosPorDia = {};
  data.eventos.forEach(function(ev) {
    if (!eventosPorDia[ev.dia]) eventosPorDia[ev.dia] = [];
    eventosPorDia[ev.dia].push(ev);
  });

  for (let d = 1; d <= ultimoDia; d++) {
    const diaSemana = new Date(data.año, data.mesIndex, d).getDay();
    const celda = document.createElement('div');

    if (diaSemana === 5) {
      const eventos = eventosPorDia[d] || [];
      if (eventos.length > 0) {
        celda.className = 'day-cell friday-cell has-events';
        const num = document.createElement('div');
        num.className = 'day-number';
        num.textContent = d;
        celda.appendChild(num);

        for (let e = 0; e < eventos.length; e++) {
          const card = document.createElement('div');
          card.className = 'event-card ' + eventos[e].nivel;
          card.innerHTML = '<span class="event-badge">' + eventos[e].badge + '</span>'
            + '<span class="event-title">' + eventos[e].titulo + '</span>'
            + '<span class="event-time">' + eventos[e].hora + '</span>';
          celda.appendChild(card);
        }
      } else {
        celda.className = 'day-cell normal-day';
        celda.textContent = d;
      }
    } else {
      celda.className = 'day-cell normal-day';
      celda.textContent = d;
    }

    grid.appendChild(celda);
  }

  const total = primerDia + ultimoDia;
  const resto = 7 - (total % 7);
  if (resto < 7) {
    for (let i = 0; i < resto; i++) {
      const e = document.createElement('div');
      e.className = 'day-cell empty';
      grid.appendChild(e);
    }
  }
}

(function() {
  const hoy = new Date();
  const mesActual = calendarios.find(function(m) {
    return m.mesIndex === hoy.getMonth() && m.año === hoy.getFullYear();
  }) || calendarios[calendarios.length - 1];
  renderCalendar(mesActual);
})();
