# Pokemon website throgh APIs

## Components list:

- AppComponent:
  - Contains page header with title-logo and navigation buttons
  - Shows the main component for each page: AllPokemon component, CatchedPokemon component or PokemonInfo component
- AllPokemon component:
  - Contains a grid of all pokemon (5x5) with basic information (image, name, types) from external api
  - Contains a button which let's you catch every pokemon of the grid
  - Contains the grid navigation buttons (back, page counter, next)
- Main 'My pokemon' component:
  - Contains a grid of catched pokemon through and external api to keep it.
- Detailed pokemon info component:
  - Card which contains a detailed info of a selected pokemon from MyPokemon component
