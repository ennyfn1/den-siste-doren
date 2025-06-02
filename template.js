const choicesData = [
    { href: 'rod.html', class: 'red', text: 'Gå til den RØDE døren' },
    { href: 'bla.html', class: 'blue', text: 'Gå til den BLÅ døren' },
    { href: 'gronn.html', class: 'green', text: 'Gå til den GRØNNE døren' }
  ];
  
  window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('choices-container');
    if (container) {
      choicesData.forEach(choice => {
        const a = document.createElement('a');
        a.href = choice.href;
        a.className = `button ${choice.class}`;
        a.textContent = choice.text;
        container.appendChild(a);
      });
    }
  });