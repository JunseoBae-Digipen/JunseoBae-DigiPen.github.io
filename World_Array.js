// Name: Junseo Bae
// Assignment Name: Final Project Prototype
// Course Number: CS099
// Term & Year: Spring 2020s

function make_2d_array(rows, columns) {
  let collection = [];
  for (let i = 0; i < rows; ++i) 
    collection.push(new Array(columns));
    return collection;
}