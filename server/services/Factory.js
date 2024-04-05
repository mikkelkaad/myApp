const UserService = require("./UserService");
const roleSerivce = require("./RoleService");
const allergySerivce = require("./AllergyService");
const breedSerivce = require("./BreedService");
const sizeSerivce = require("./SizeService");
const speciesSerivce = require("./SpeciesService");
const brandSerivce = require("./BrandService");
const foodSerivce = require("./FoodService");
const ingredientSerivce = require("./IngredientService");
const petSerivce = require("./PetService");

const Factory = {
  user: (db) => {
    return new UserService(db);
  },
  role: (db) => {
    return new roleSerivce(db);
  },
  allergy: (db) => {
    return new allergySerivce(db);
  },
  breed: (db) => {
    return new breedSerivce(db);
  },
  pet: (db) => {
    return new petSerivce(db);
  },
  size: (db) => {
    return new sizeSerivce(db);
  },
  species: (db) => {
    return new speciesSerivce(db);
  },
  brand: (db) => {
    return new brandSerivce(db);
  },
  ingredient: (db) => {
    return new ingredientSerivce(db);
  },
  food: (db) => {
    return new foodSerivce(db);
  },
};

module.exports = Factory;
