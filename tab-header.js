(() => {
  const simpleInterestHeader = document.querySelector('div.tab-header.simple-interest');
  const piggyvestInterestHeader = document.querySelector('div.tab-header.piggyvest-daily-interest');
  const simpleInterestSection = document.querySelector('section.simple-interest');
  const piggyvestInterestSection = document.querySelector('section.piggyvest-daily-interest');

  simpleInterestHeader.setAttribute('disabled', 'true');

  simpleInterestHeader.addEventListener('click', (e) => {
    if (!simpleInterestHeader.hasAttribute('disabled')) {
      simpleInterestHeader.setAttribute('disabled', 'true');
      piggyvestInterestHeader.setAttribute('inactive-tab', 'true');
      simpleInterestHeader.removeAttribute('inactive-tab');
      piggyvestInterestHeader.removeAttribute('disabled');
      simpleInterestSection.toggleAttribute('inactive-section');
      piggyvestInterestSection.toggleAttribute('inactive-section');
    }
  });

  piggyvestInterestHeader.addEventListener('click', (e) => {
    if (!piggyvestInterestHeader.hasAttribute('disabled')) {
      piggyvestInterestHeader.setAttribute('disabled', 'true');
      simpleInterestHeader.setAttribute('inactive-tab', 'true');
      piggyvestInterestHeader.removeAttribute('inactive-tab');
      simpleInterestHeader.removeAttribute('disabled');
      piggyvestInterestSection.toggleAttribute('inactive-section');
      simpleInterestSection.toggleAttribute('inactive-section');
    }
  });
})()