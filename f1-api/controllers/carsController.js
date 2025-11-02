// Dados em memória (campos compatíveis com o front)
let cars = [
  { id: 1, driver: "Max Verstappen", team: "Red Bull Racing", year: 2024, engine: "Honda RBPT" },
  { id: 2, driver: "Charles Leclerc", team: "Ferrari",         year: 2024, engine: "Ferrari" },
  { id: 3, driver: "Lewis Hamilton",  team: "Mercedes",         year: 2024, engine: "Mercedes" },
  { id: 4, driver: "Lando Norris",    team: "McLaren",          year: 2024, engine: "Mercedes" },
  { id: 5, driver: "Fernando Alonso", team: "Aston Martin",     year: 2024, engine: "Mercedes" },
];

const parseId = (req) => Number.parseInt(req.params.id, 10);

export function getAllCars(_req, res) {
  res.json(cars);
}

export function getCarById(req, res) {
  const id = parseId(req);
  const car = cars.find(c => c.id === id);
  if (!car) return res.status(404).json({ error: "Car not found" });
  res.json(car);
}

export function createCar(req, res) {
  const { driver, team, year, engine } = req.body || {};
  if (!driver || !team || typeof year !== "number" || !engine) {
    return res.status(400).json({ error: "Missing required fields (driver, team, year:number, engine)" });
  }
  const newCar = {
    id: cars.length ? Math.max(...cars.map(c => c.id)) + 1 : 1,
    driver, team, year, engine,
  };
  cars.push(newCar);
  res.status(201).json(newCar);
}

export function updateCar(req, res) {
  const id = parseId(req);
  const idx = cars.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: "Car not found" });

  const { driver, team, year, engine } = req.body || {};
  if (!driver || !team || typeof year !== "number" || !engine) {
    return res.status(400).json({ error: "Missing required fields (driver, team, year:number, engine)" });
  }
  cars[idx] = { id, driver, team, year, engine };
  res.json(cars[idx]);
}

export function patchCar(req, res) {
  const id = parseId(req);
  const car = cars.find(c => c.id === id);
  if (!car) return res.status(404).json({ error: "Car not found" });

  const allowed = ["driver", "team", "year", "engine"];
  for (const k of Object.keys(req.body || {})) {
    if (allowed.includes(k)) car[k] = k === "year" ? Number(req.body[k]) : req.body[k];
  }
  res.json(car);
}

export function deleteCar(req, res) {
  const id = parseId(req);
  const idx = cars.findIndex(c => c.id === id);
  if (idx === -1) return res.status(404).json({ error: "Car not found" });

  const [removed] = cars.splice(idx, 1);
  res.json(removed); // seu apiDelete espera JSON
}
