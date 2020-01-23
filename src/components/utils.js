const nameOptions = [
  { id: "1", label: "Bárbara Ribeiro" },
  { id: "2", label: "Catarina Curioso" },
  { id: "3", label: "Sérgio Machado" }
];

const roomOptions = [
  { id: "1", label: "Shark" },
  { id: "2", label: "Puffer" },
  { id: "3", label: "Carp" },
  { id: "4", label: "Bream" }
];

const getName = id => {
  const selected = nameOptions.filter(el => el.id === id);
  return selected[0].label;
};

const getRoom = id => {
  const selected = roomOptions.filter(el => el.id === id);
  return selected[0].label;
};

export { nameOptions, roomOptions, getName, getRoom };
